from fastapi import APIRouter, HTTPException, status, Depends, Header
from models.user import UserCreate, UserLogin, User, UserInDB, UserResponse, LoginResponse
from utils.auth import get_password_hash, verify_password, create_access_token, decode_access_token
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/auth", tags=["authentication"])

# Database dependency will be injected
users_collection = None

def set_database(db):
    """Set the database connection for this router."""
    global users_collection
    users_collection = db.users

@router.post("/signup", response_model=dict, status_code=status.HTTP_201_CREATED)
async def signup(user_data: UserCreate):
    """
    Register a new user.
    """
    try:
        # Check if user already exists
        existing_user = await users_collection.find_one({"email": user_data.email})
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered"
            )
        
        # Hash the password
        hashed_password = get_password_hash(user_data.password)
        
        # Create user object
        user = User(
            name=user_data.name,
            surname=user_data.surname,
            email=user_data.email,
            age=user_data.age,
            country=user_data.country,
            profession=user_data.profession,
            gender=user_data.gender
        )
        
        # Create user in DB object
        user_in_db = UserInDB(**user.dict(), hashed_password=hashed_password)
        
        # Save to database
        user_dict = user_in_db.dict()
        await users_collection.insert_one(user_dict)
        
        logger.info(f"New user registered: {user.email}")
        
        return {
            "message": "User registered successfully",
            "user": UserResponse(**user.dict())
        }
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error during signup: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred during registration"
        )

@router.post("/login", response_model=LoginResponse)
async def login(credentials: UserLogin):
    """
    Authenticate user and return JWT token.
    """
    try:
        # Find user by email
        user_doc = await users_collection.find_one({"email": credentials.email})
        
        if not user_doc:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )
        
        # Verify password
        if not verify_password(credentials.password, user_doc["hashed_password"]):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )
        
        # Create access token
        access_token = create_access_token(data={"sub": user_doc["email"]})
        
        # Prepare user response
        user_response = UserResponse(
            id=user_doc["id"],
            name=user_doc["name"],
            surname=user_doc["surname"],
            email=user_doc["email"],
            age=user_doc["age"],
            country=user_doc["country"],
            profession=user_doc["profession"],
            gender=user_doc["gender"]
        )
        
        logger.info(f"User logged in: {credentials.email}")
        
        return LoginResponse(
            message="Login successful",
            access_token=access_token,
            token_type="bearer",
            user=user_response
        )
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error during login: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred during login"
        )

@router.get("/me", response_model=dict)
async def get_current_user(authorization: str = Header(None)):
    """
    Get current logged-in user information.
    """
    try:
        if not authorization or not authorization.startswith("Bearer "):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authorization header"
            )
        
        token = authorization.split(" ")[1]
        payload = decode_access_token(token)
        
        if not payload:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid or expired token"
            )
        
        email = payload.get("sub")
        user_doc = await users_collection.find_one({"email": email}, {"_id": 0})
        
        if not user_doc:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found"
            )
        
        # Remove sensitive data
        user_doc.pop("hashed_password", None)
        
        # Map 'name' to 'firstName' and 'surname' to 'lastName' for frontend
        return {
            "id": user_doc.get("id"),
            "firstName": user_doc.get("name"),
            "lastName": user_doc.get("surname"),
            "email": user_doc.get("email"),
            "age": user_doc.get("age"),
            "country": user_doc.get("country"),
            "profession": user_doc.get("profession"),
            "gender": user_doc.get("gender")
        }
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error getting current user: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while fetching user data"
        )
