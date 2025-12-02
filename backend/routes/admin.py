from fastapi import APIRouter, HTTPException, status, Depends
from models.admin import AdminLogin, AdminToken
from models.user import UserResponse
from models.contact import ContactFormSubmission
from utils.auth import create_access_token, verify_token
from typing import List
import logging
import os

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/admin", tags=["admin"])

# Database dependency will be injected
users_collection = None
contact_collection = None

# Admin password from environment or default
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "admin123")

def set_database(db):
    """Set the database connection for this router."""
    global users_collection, contact_collection
    users_collection = db.users
    contact_collection = db.contact_submissions

@router.post("/login", response_model=AdminToken)
async def admin_login(credentials: AdminLogin):
    """
    Admin login endpoint.
    """
    if credentials.password != ADMIN_PASSWORD:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid admin password"
        )
    
    # Create admin token
    access_token = create_access_token(data={"sub": "admin", "role": "admin"})
    
    logger.info("Admin logged in")
    
    return AdminToken(
        access_token=access_token,
        token_type="bearer"
    )

@router.get("/users", response_model=List[UserResponse])
async def get_all_users():
    """
    Get all registered users (admin only).
    """
    try:
        users = await users_collection.find().to_list(1000)
        
        user_list = [
            UserResponse(
                id=user["id"],
                name=user["name"],
                surname=user["surname"],
                email=user["email"],
                age=user["age"],
                country=user["country"],
                profession=user["profession"],
                gender=user["gender"]
            )
            for user in users
        ]
        
        return user_list
    
    except Exception as e:
        logger.error(f"Error fetching users: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while fetching users"
        )

@router.get("/contacts", response_model=List[ContactFormSubmission])
async def get_all_contacts():
    """
    Get all contact form submissions (admin only).
    """
    try:
        contacts = await contact_collection.find().sort("created_at", -1).to_list(1000)
        
        contact_list = [
            ContactFormSubmission(**contact)
            for contact in contacts
        ]
        
        return contact_list
    
    except Exception as e:
        logger.error(f"Error fetching contacts: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while fetching contact submissions"
        )

@router.get("/stats")
async def get_admin_stats():
    """
    Get dashboard statistics (admin only).
    """
    try:
        total_users = await users_collection.count_documents({})
        total_contacts = await contact_collection.count_documents({})
        new_contacts = await contact_collection.count_documents({"status": "new"})
        
        return {
            "total_users": total_users,
            "total_contacts": total_contacts,
            "new_contacts": new_contacts
        }
    
    except Exception as e:
        logger.error(f"Error fetching stats: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while fetching statistics"
        )
