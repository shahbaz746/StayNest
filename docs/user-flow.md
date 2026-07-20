# StayNest - User Flow

1. Guest User Flow

Guest
   │
   ▼
Landing Page
   │
   ▼
Hostel List
   │
   ▼
Hostel Details
   │
   ▼
Room Details
   │
   ▼
Book Now
   │
   ▼
Login / Signup


2. Student User Flow

Student Opens StayNest
        │
        ▼
Landing Page
        │
        ▼
Browse Hostels
        │
        ▼
Search / Filter by City
        │
        ▼
Select Hostel
        │
        ▼
View Hostel Details
        │
        ▼
View Available Rooms
        │
        ▼
Select Room
        │
        ▼
View Available Seats
        │
        ▼
Click "Book Now"
        │
        ▼
───────────────────────────────
Is Student Logged In?
───────────────────────────────
        │
   ┌────┴────┐
   │         │
  No        Yes
   │         │
   ▼         ▼
Login / Signup   Continue Booking
   │
   ▼
Choose Login Method
   │
   ├──────────────┐
   │              │
   ▼              ▼
Email & Password  Continue with Google
   │
   ▼
Complete Profile
   │
   ▼
Select Gender
   │
   ▼
Select City
   │
   ▼
Continue Previous Booking
        │
        ▼
Add Resident Details
(Name, CNIC, Phone, etc.)
        │
        ▼
Booking Summary
        │
        ▼
Review Terms & Cancellation Policy
        │
        ▼
Proceed to Stripe Payment
        │
        ▼
Payment Successful
        │
        ▼
Booking Created
        │
        ▼
Seat Status → Booked
        │
        ▼
Digital Booking Contract Created
        │
        ▼
Booking Confirmation
        │
        ▼
My Profile
        │
        ├────────► My Bookings
        ├────────► Notifications
        ├────────► Resident Details
        ├────────► Booking Receipt
        └────────► Profile Settings





3. Hostel Owner Flow

Owner Opens StayNest
        │
        ▼
Login / Signup
        │
        ▼
Email Verification
        │
        ▼
Submit Verification Details
(CNIC, Phone, Hostel Name, Address, City)
        │
        ▼
Admin Review
        │
 ┌──────┴────────┐
 │               │
 ▼               ▼
Rejected      Approved
 │               │
 ▼               ▼
Update Docs   Create First Hostel
                    │
                    ▼
            Add Hostel Details
                    │
                    ▼
             Upload Hostel Images
                    │
                    ▼
                Add Rooms
                    │
                    ▼
          Create Seats Manually
                    │
                    ▼
         Set Price for Each Seat
                    │
                    ▼
             Publish Hostel
                    │
                    ▼
        Receive Student Bookings
                    │
                    ▼
         Manage Rooms & Seats
                    │
                    ▼
        Manage Multiple Hostels
                    │
                    ▼
          Upgrade Subscription
                    │
                    ▼
          Profile & Settings


4. Admin Flow

Admin Login
      │
      ▼
Dashboard
      │
      ├──────────────► View Pending Owner Verifications
      │                     │
      │                     ▼
      │            View Documents
      │                     │
      │          ┌──────────┴──────────┐
      │          │                     │
      │          ▼                     ▼
      │      Approve               Reject
      │
      ├──────────────► Manage Hostels
      │                     │
      │                     ▼
      │      View / Hide / Delete Hostel
      │
      ├──────────────► Manage Students
      │                     │
      │                     ▼
      │      View / Block / Delete Student
      │
      ├──────────────► Manage Owners
      │                     │
      │                     ▼
      │      View / Block / Delete Owner
      │
      ├──────────────► Manage Bookings
      │                     │
      │                     ▼
      │      Search / Cancel / Refund
      │
      ├──────────────► Dashboard Statistics
      │
      └──────────────► Profile & Settings

