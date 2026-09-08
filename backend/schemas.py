from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class BookingCreate(BaseModel):
    client_name: str
    phone: str
    email: Optional[str] = None
    event_date: str
    event_time: Optional[str] = None
    venue_location: str
    design_category: str
    guest_count: Optional[str] = None
    message: Optional[str] = None

class BookingResponse(BookingCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True