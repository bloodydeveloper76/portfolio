"""
Portfolio Contact Form Backend - FastAPI

This is a simple FastAPI backend for handling contact form submissions.
Deploy this to a service like Railway, Render, or your own server.

To run locally:
1. Install dependencies: pip install fastapi uvicorn python-multipart aiosmtplib python-dotenv
2. Create a .env file with your email credentials
3. Run: uvicorn main:app --reload
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import os
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()

app = FastAPI(
    title="Portfolio Contact API",
    description="Backend API for Vignesh Kumar's Portfolio Contact Form",
    version="1.0.0"
)

# CORS configuration - Update origins for production
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://vigneshkumar.dev",  # Update with your domain
        "https://your-portfolio-domain.vercel.app",  # Update with your Vercel domain
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str


@app.get("/")
async def root():
    return {"message": "Portfolio Contact API is running", "status": "healthy"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact_form(form_data: ContactForm):
    """
    Handle contact form submission and send email notification.
    """
    try:
        # Email configuration from environment variables
        smtp_server = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        smtp_username = os.getenv("SMTP_USERNAME")
        smtp_password = os.getenv("SMTP_PASSWORD")
        recipient_email = os.getenv("RECIPIENT_EMAIL", "vigneshkumar5776@gmail.com")

        if not smtp_username or not smtp_password:
            # If email not configured, just log and return success
            print(f"New contact form submission:")
            print(f"  Name: {form_data.name}")
            print(f"  Email: {form_data.email}")
            print(f"  Subject: {form_data.subject}")
            print(f"  Message: {form_data.message}")
            return ContactResponse(
                success=True,
                message="Message received! (Email notification not configured)"
            )

        # Create email message
        msg = MIMEMultipart()
        msg["From"] = smtp_username
        msg["To"] = recipient_email
        msg["Subject"] = f"Portfolio Contact: {form_data.subject}"

        # Email body
        body = f"""
New message from your portfolio website:

Name: {form_data.name}
Email: {form_data.email}
Subject: {form_data.subject}

Message:
{form_data.message}

---
This email was sent from your portfolio contact form.
        """
        msg.attach(MIMEText(body, "plain"))

        # Send email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.send_message(msg)

        return ContactResponse(
            success=True,
            message="Message sent successfully!"
        )

    except Exception as e:
        print(f"Error sending email: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to send message. Please try again later."
        )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
