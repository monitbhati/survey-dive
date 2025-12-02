# API Contracts - FACTUM RESEARCH Website

## Authentication Endpoints

### 1. User Signup
**Endpoint:** `POST /api/auth/signup`

**Request Body:**
```json
{
  "name": "John",
  "surname": "Doe",
  "email": "john.doe@example.com",
  "age": 30,
  "country": "United States",
  "profession": "Software Engineer",
  "gender": "male",
  "password": "SecurePass123"
}
```

**Response (Success):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "name": "John",
    "surname": "Doe",
    "email": "john.doe@example.com",
    "age": 30,
    "country": "United States",
    "profession": "Software Engineer",
    "gender": "male"
  }
}
```

**Response (Error - Email exists):**
```json
{
  "detail": "Email already registered"
}
```

### 2. User Login
**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "SecurePass123"
}
```

**Response (Success):**
```json
{
  "message": "Login successful",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "user": {
    "id": "user_id",
    "name": "John",
    "surname": "Doe",
    "email": "john.doe@example.com"
  }
}
```

**Response (Error - Invalid credentials):**
```json
{
  "detail": "Invalid email or password"
}
```

## Database Models

### User Model
```python
{
  "_id": ObjectId,
  "name": str,
  "surname": str,
  "email": str (unique),
  "age": int,
  "country": str,
  "profession": str,
  "gender": str,
  "hashed_password": str,
  "created_at": datetime,
  "updated_at": datetime
}
```

## Frontend Integration

### Signup Flow
1. User fills signup form with all required fields
2. Frontend sends POST request to `/api/auth/signup`
3. Backend validates data, hashes password, saves to database
4. Frontend shows success message and switches to login tab

### Login Flow
1. User enters email and password
2. Frontend sends POST request to `/api/auth/login`
3. Backend verifies credentials, generates JWT token
4. Frontend stores token in localStorage
5. Frontend shows success message

## Security
- Passwords are hashed using bcrypt
- JWT tokens expire after 24 hours
- Email validation on backend
- Password minimum length: 8 characters
