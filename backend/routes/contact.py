from fastapi import APIRouter, HTTPException, status
from models.contact import ContactFormCreate, ContactFormSubmission
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])

# Database dependency will be injected
contact_collection = None

def set_database(db):
    """Set the database connection for this router."""
    global contact_collection
    contact_collection = db.contact_submissions

@router.post("/submit", response_model=dict, status_code=status.HTTP_201_CREATED)
async def submit_contact_form(form_data: ContactFormCreate):
    """
    Submit a contact form.
    """
    try:
        # Create contact submission object
        submission = ContactFormSubmission(
            name=form_data.name,
            email=form_data.email,
            company=form_data.company,
            message=form_data.message
        )
        
        # Save to database
        submission_dict = submission.dict()
        await contact_collection.insert_one(submission_dict)
        
        logger.info(f"New contact form submission from: {form_data.email}")
        
        return {
            "message": "Thank you for reaching out. Our team will respond within 24 hours.",
            "submission_id": submission.id
        }
    
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while submitting your message"
        )
