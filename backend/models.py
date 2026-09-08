from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from database import Base

class BookingEnquiry(Base):
    __tablename__ = "bookings_enquiries"

    id = Column(Integer, primary_key=True, index=True)
    client_name = Column(String(100), nullable=False)
    phone = Column(String(20), nullable=False)
    email = Column(String(100), nullable=True)
    event_date = Column(String(50), nullable=False)
    event_time = Column(String(50), nullable=True)
    venue_location = Column(String(200), nullable=False)
    design_category = Column(String(100), nullable=False)
    guest_count = Column(String(50), nullable=True)
    message = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)