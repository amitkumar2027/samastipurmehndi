from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

import models
import schemas
from database import engine, get_db

# Create DB tables automatically
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Samastipur Mehndi - Booking & Enquiry API",
    description="Backend API for Artist Anshu Priya's Mehndi Studio",
    version="1.0.0"
)

# CORS setup for React (Vite: 5173, CRA: 3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "https://samastipurmehndi.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to Samastipur Mehndi API - Anshu Priya"}

@app.post("/api/enquiries", response_model=schemas.BookingResponse, status_code=status.HTTP_201_CREATED)
def submit_enquiry(enquiry: schemas.BookingCreate, db: Session = Depends(get_db)):
    try:
        new_booking = models.BookingEnquiry(**enquiry.dict())
        db.add(new_booking)
        db.commit()
        db.refresh(new_booking)
        return new_booking
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

@app.get("/api/enquiries", response_model=List[schemas.BookingResponse])
def fetch_all_enquiries(db: Session = Depends(get_db)):
    return db.query(models.BookingEnquiry).order_by(models.BookingEnquiry.id.desc()).all()