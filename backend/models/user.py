from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
import uuid

class UserBase(BaseModel):
    name: str
    surname: str
    email: EmailStr
    age: int = Field(ge=18, le=100)
    country: str
    profession: str
    gender: str

class UserCreate(UserBase):
    password: str = Field(min_length=8)

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class User(UserBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "name": "John",
                "surname": "Doe",
                "email": "john.doe@example.com",
                "age": 30,
                "country": "United States",
                "profession": "Software Engineer",
                "gender": "male",
                "created_at": "2024-01-01T00:00:00",
                "updated_at": "2024-01-01T00:00:00"
            }
        }

class UserInDB(User):
    hashed_password: str

class UserResponse(BaseModel):
    id: str
    name: str
    surname: str
    email: EmailStr
    age: int
    country: str
    profession: str
    gender: str

class Token(BaseModel):
    access_token: str
    token_type: str

class LoginResponse(BaseModel):
    message: str
    access_token: str
    token_type: str
    user: UserResponse
