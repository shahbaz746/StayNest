# StayNest - System Design

                    User
                      │
                      ▼
               React Frontend
                      │
                 REST API
                      │
                      ▼
             Node.js + Express
      ┌──────────┼────────────┐
      │          │            │
      ▼          ▼            ▼
 MongoDB   Cloudinary     Stripe
      │
      ▼
 Email Service



## 1. Architecture Overview

StayNest follows a modern three-tier architecture consisting of a React frontend, a Node.js/Express backend, and a MongoDB database. The frontend communicates with the backend through secure REST APIs. The backend handles business logic, authentication, bookings, subscriptions, and integrations with external services. Images are stored in Cloudinary, payments are processed using Stripe, and JWT is used for secure authentication and authorization.

## Components

- React.js — User Interface
- Node.js + Express — Backend API & Business Logic
- MongoDB — Data Storage
- Cloudinary — Image Storage
- Stripe — Payment Processing
- JWT — Authentication & Authorization

## Request Flow

User → React → REST API → Express → MongoDB / Cloudinary / Stripe → Response → React



## 2. Tech Stack


| Category              | Technology                          | Why?                                  |
| --------------------- | ----------------------------------- | ------------------------------------- |
| Frontend              | React.js                            | Fast, component-based UI              |
| Styling               | Tailwind CSS                        | Rapid UI development                  |
| Routing               | React Router DOM                    | Client-side routing                   |
| State Management      | Context API (Redux later if needed) | MVP ke liye simple aur lightweight    |
| Backend               | Node.js + Express.js                | JavaScript full-stack aur scalable    |
| Database              | MongoDB + Mongoose                  | Flexible NoSQL database               |
| Authentication        | JWT + HTTP-only Cookies             | Secure authentication                 |
| Image Storage         | Cloudinary                          | Image optimization aur CDN            |
| Payment Gateway       | Stripe                              | Secure online payments                |
| Email Service         | Nodemailer                          | OTP, verification, notifications      |
| Maps                  | OpenStreetMap + Leaflet             | Google Maps se free, MVP ke liye best |
| Version Control       | Git + GitHub                        | Source code management                |
| Deployment (Frontend) | Vercel                              | React deployment easy                 |
| Deployment (Backend)  | Railway                             | Simple Node.js deployment             |
| Database Hosting      | MongoDB Atlas                       | Managed cloud database                |


# 3. Frontend Architecture

## Overview

The StayNest frontend is built using React.js and follows a modular, scalable, and component-based architecture. The application is divided into three main sections: Public Pages, Authentication, and Protected Dashboard. Authentication is handled using JWT with HTTP-only cookies, while authorization is managed through Role-Based Access Control (RBAC).

The architecture is designed to ensure clean code organization, maintainability, scalability, and reusability.

---

# Frontend Layers

```
React Application
        │
        ├────────────── Public Pages
        │
        ├────────────── Authentication
        │
        └────────────── Protected Dashboard
```

---

# Public Pages

These pages are accessible without authentication.

- Landing Page
- Hostel Listing
- Hostel Details
- Room Details
- About
- Contact
- 404 Page

Guests can browse hostels and rooms, but booking requires authentication.

---

# Authentication Pages

Authentication pages handle user identity verification.

- Login
- Signup
- Forgot Password
- Reset Password
- Email Verification

Authentication is implemented using JWT stored in HTTP-only cookies.

---

# Protected Dashboard

After successful login, users are redirected to the dashboard based on their assigned role.

Roles:

- Student
- Hostel Owner
- Admin

Each role has access only to its authorized pages.

---

# Routing Strategy

The application uses React Router DOM for client-side routing.

Routes are divided into four categories:

## Public Routes

Accessible by everyone.

Examples:

- /
- /hostels
- /hostel/:id

---

## Authentication Routes

Accessible only when authentication is required.

Examples:

- /login
- /signup

---

## Protected Routes

Accessible only to authenticated users.

Examples:

- /dashboard
- /profile
- /bookings

---

## Role-Based Routes

Each user role has its own authorized pages.

Student

- /student/profile
- /student/bookings

Owner

- /owner/dashboard
- /owner/hostels
- /owner/bookings
- /owner/subscription

Admin

- /admin/dashboard
- /admin/owners
- /admin/students
- /admin/bookings
- /admin/hostels

Unauthorized users are redirected to the appropriate page.

---

# Route Protection

StayNest implements protected routes to prevent unauthorized access.

Workflow:

Guest
↓
Protected Route
↓
Redirect to Login

Authenticated User
↓
Role Verification
↓
Access Granted

Wrong Role
↓
403 Forbidden

---

# Role-Based Access Control (RBAC)

Authorization is implemented using Role-Based Access Control.

Supported Roles:

- Student
- Hostel Owner
- Admin

Every protected route validates the user's role before granting access.

---

# State Management

StayNest uses React Context API for global state management.

Global State includes:

- Authenticated User
- User Role
- Notifications
- Theme (Future)
- Application Settings

Context API acts as the Single Source of Truth throughout the application.

---

# API Communication

The frontend communicates with the backend using the Fetch API.

Flow:

React
↓
REST API
↓
Express Server
↓
Database

The frontend never communicates directly with MongoDB.

---

# Folder Structure

```
src/
│
├── assets/
├── components/
├── pages/
├── layouts/
├── routes/
├── context/
├── hooks/
├── services/
├── utils/
├── constants/
├── lib/
├── styles/
│
├── App.jsx
└── main.jsx
```

---

# Folder Responsibilities

## assets/

Stores static resources.

Examples:

- Images
- Icons
- Fonts
- Logos

---

## components/

Reusable UI components.

Examples:

- Navbar
- Footer
- Button
- Modal
- HostelCard
- RoomCard
- SeatCard

---

## pages/

Application pages.

Examples:

- Landing
- Hostel Details
- Student Dashboard
- Owner Dashboard
- Admin Dashboard

---

## layouts/

Shared layouts.

Examples:

- MainLayout
- AuthLayout
- DashboardLayout

---

## routes/

Application routing.

Contains:

- Public Routes
- Protected Routes
- Role-Based Routes

---

## context/

Global application state.

Examples:

- AuthContext
- NotificationContext

---

## hooks/

Reusable custom hooks.

Examples:

- useAuth()
- useHostels()
- useBookings()

---

## services/

API communication layer.

Examples:

- authService
- hostelService
- bookingService
- paymentService

---

## utils/

Helper functions.

Examples:

- Format Currency
- Format Date
- Seat Utilities

---

## constants/

Application constants.

Examples:

- Roles
- Routes
- Subscription Plans

---

## lib/

Third-party configurations.

Examples:

- Fetch Configuration
- Cloudinary Configuration
- Stripe Configuration

---

## styles/

Global styling files.

Contains:

- Global CSS
- Tailwind custom styles

---

# Dashboard Strategy

StayNest uses a single dashboard layout for all users.

The displayed sidebar and navigation items are dynamically rendered based on the authenticated user's role.

This approach improves maintainability and reduces code duplication.

---

# Notification Strategy

Notifications are accessible through the notification bell located in the top navigation bar.

Clicking the notification bell opens a dropdown with recent notifications and provides access to the complete notifications page.

---

# Frontend Security

The frontend follows modern security practices.

- JWT Authentication
- HTTP-only Cookies
- Protected Routes
- Role-Based Authorization
- Secure API Communication
- Client-side Route Protection

---

# Architecture Principles

The frontend architecture follows these software engineering principles:

- Component-Based Architecture
- Reusability
- Separation of Concerns
- Single Source of Truth
- Modular Folder Structure
- Scalable Design
- Maintainable Codebase

---

# Technology Summary

| Category | Technology |
|-----------|------------|
| Framework | React.js |
| Language | JavaScript |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| State Management | Context API |
| Authentication | JWT + HTTP-only Cookies |
| API Communication | Fetch API |
| UI Components | Custom Components + shadcn/ui |s

## 4. Backend Architecture

# 4. Backend Architecture

## Overview

The StayNest backend is built using Node.js, Express.js, and MongoDB. It follows the MVC (Model-View-Controller) architecture combined with a Service Layer to separate business logic from request handling.

The backend is designed to be secure, scalable, maintainable, and easy to extend as the platform grows. All application logic is organized into dedicated modules such as Controllers, Services, Models, Routes, and Middlewares.

---

# Backend Architecture

```
React Frontend
        │
        ▼
Express Server
        │
        ▼
Routes
        │
        ▼
Middlewares
(Authentication / Authorization / Validation)
        │
        ▼
Controllers
        │
        ▼
Services
(Business Logic)
        │
        ▼
Models
        │
        ▼
MongoDB
```

---

# Architecture Pattern

StayNest follows the MVC Architecture with a Service Layer.

```
Client
   │
   ▼
Route
   │
   ▼
Middleware
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Model
   │
   ▼
MongoDB
```

This architecture keeps the code clean, modular, and scalable.

---

# Backend Folder Structure

```
backend/
│
├── src/
│   │
│   ├── config/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── validations/
│   ├── utils/
│   ├── constants/
│   ├── lib/
│   ├── uploads/
│   ├── jobs/
│   │
│   ├── app.js
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

# Folder Responsibilities

## config/

Application configuration.

Examples:

- MongoDB Connection
- Environment Variables
- Server Configuration

---

## controllers/

Controllers receive client requests and return responses.

Responsibilities:

- Receive Request
- Call Service Layer
- Return JSON Response

Business logic is never written inside controllers.

---

## services/

The Service Layer contains all business logic.

Examples:

- Booking Logic
- Authentication Logic
- Subscription Logic
- Payment Logic
- Refund Logic

This is the core business layer of the application.

---

## models/

Models communicate directly with MongoDB.

Examples:

- User
- Hostel
- Room
- Seat
- Booking
- Payment
- Notification

Models perform CRUD operations only.

---

## routes/

Routes define all API endpoints and forward requests to controllers.

Examples:

- Authentication Routes
- Hostel Routes
- Booking Routes
- Payment Routes

---

## middlewares/

Middlewares execute before controllers.

Responsibilities:

- JWT Authentication
- Role Authorization
- Request Validation
- Error Handling

---

## validations/

Contains request validation logic.

Examples:

- Login Validation
- Signup Validation
- Booking Validation
- Hostel Validation

---

## utils/

Contains reusable helper functions.

Examples:

- Generate Booking ID
- Date Formatter
- OTP Generator

---

## constants/

Stores application constants.

Examples:

- User Roles
- Booking Status
- Cities
- Subscription Plans

---

## lib/

Contains third-party service configurations.

Examples:

- Cloudinary
- Stripe
- JWT Helper

---

## uploads/

Stores temporary uploaded files before they are uploaded to Cloudinary.

---

## jobs/

Contains background jobs.

Examples:

- Subscription Expiry
- Reminder Notifications
- Scheduled Tasks

---

# Request Lifecycle

Every request follows the same lifecycle.

```
Client
    │
    ▼
Express Route
    │
    ▼
Authentication Middleware
    │
    ▼
Authorization Middleware
    │
    ▼
Validation Middleware
    │
    ▼
Controller
    │
    ▼
Service
    │
    ▼
Model
    │
    ▼
MongoDB
    │
    ▼
JSON Response
```

---

# Authentication Flow

Authentication is implemented using JWT (JSON Web Token).

```
User Login
      │
      ▼
POST /auth/login
      │
      ▼
Controller
      │
      ▼
Service
      │
      ▼
Verify Email & Password
      │
      ▼
Generate JWT
      │
      ▼
Store JWT in HTTP-only Cookie
      │
      ▼
Login Successful
```

The JWT is automatically sent with every authenticated request.

---

# Authorization Flow

StayNest uses Role-Based Access Control (RBAC).

Supported Roles:

- Student
- Hostel Owner
- Admin

Each role has access only to its authorized resources.

Example:

Student

- Browse Hostels
- Book Seats
- Manage Profile

Owner

- Manage Hostels
- Manage Rooms
- Manage Seats
- Manage Bookings

Admin

- Verify Owners
- Manage Users
- Manage Platform

---

# Middleware Flow

Every protected API follows this flow.

```
Client Request
        │
        ▼
JWT Middleware
        │
        ▼
Role Middleware
        │
        ▼
Validation Middleware
        │
        ▼
Controller
```

The controller executes only after all middleware checks are successfully completed.

---

# Booking Flow

```
Student
      │
      ▼
Select Hostel
      │
      ▼
Select Room
      │
      ▼
Select Available Seat
      │
      ▼
Add Resident Details
      │
      ▼
Review Booking
      │
      ▼
Accept Terms & Conditions
      │
      ▼
Stripe Payment
      │
      ▼
Payment Successful
      │
      ▼
Booking Created
      │
      ▼
Seat Status → Reserved
      │
      ▼
Notification Sent to Hostel Owner
      │
      ▼
Owner Reviews Booking
      │
 ┌──────┴────────┐
 │               │
 ▼               ▼
Approve       Reject
 │               │
 ▼               ▼
Booking       Refund
Confirmed     (Within 2 Hours)
 │
 ▼
Transfer Payment to Owner
```

---

# Cloudinary Image Upload Flow

```
Owner Uploads Image
        │
        ▼
Frontend
        │
        ▼
Backend
        │
        ▼
Cloudinary
        │
        ▼
Image URL Returned
        │
        ▼
Save URL in MongoDB
```

Images are stored in Cloudinary while only the image URL is stored in MongoDB.

---

# Stripe Payment Flow

```
Student
     │
     ▼
Click Pay
     │
     ▼
Stripe Checkout
     │
     ▼
Payment Successful
     │
     ▼
Stripe Verification
     │
     ▼
Create Booking
     │
     ▼
Notify Hostel Owner
```

Bookings are created only after successful payment verification.

---

# Notification Flow

Notifications are generated automatically for all major events.

### Student

- Booking Confirmed
- Booking Rejected
- Refund Processed
- Booking Cancelled

### Hostel Owner

- New Booking
- Booking Cancellation
- Hostel Approved
- Subscription Reminder

### Admin

- New Owner Registration
- Pending Verification
- Failed Payments

---

# Error Handling Strategy

All API responses follow a standard format.

## Success Response

```json
{
  "success": true,
  "message": "Booking created successfully",
  "data": {}
}
```

---

## Error Response

```json
{
  "success": false,
  "message": "Seat is already booked"
}
```

This provides consistency across the frontend and backend.

---

# Backend Security

The backend follows modern security practices.

- JWT Authentication
- HTTP-only Cookies
- Password Hashing (bcrypt)
- Role-Based Authorization
- Input Validation
- Secure API Communication
- Centralized Error Handling

---

# Backend Architecture Principles

The backend follows the following software engineering principles:

- MVC Architecture
- Service Layer Pattern
- Separation of Concerns
- Single Responsibility Principle (SRP)
- Role-Based Access Control (RBAC)
- RESTful API Design
- Modular Folder Structure
- Scalable and Maintainable Codebase

---

# External Services

StayNest integrates the following third-party services.

| Service | Purpose |
|----------|---------|
| Cloudinary | Image Storage |
| Stripe | Online Payments |
| JWT | Authentication |
| MongoDB | Database |
| Express.js | REST API |
| Node.js | Backend Runtime |

---

# Summary

The StayNest backend architecture is designed using industry-standard software engineering practices. It separates business logic, request handling, database operations, authentication, authorization, validation, and external integrations into dedicated modules, making the application scalable, secure, maintainable, and production-ready.

## 5. Database

Database Design
Overview

The StayNest database is designed using MongoDB with a normalized structure to avoid data duplication, improve scalability, and maintain clean relationships between collections.

The system uses reference-based relationships between collections instead of embedding large amounts of data. This approach keeps the database lightweight, easier to maintain, and suitable for future scaling.

Collections

The StayNest database consists of the following collections:

Users
Hostels
Rooms
Seats
Bookings
Payments
Subscriptions
Notifications
Collection Relationships
User (Owner)
        │
        ▼
Hostel
        │
        ▼
Room
        │
        ▼
Seat
        │
        ▼
Booking
        │
        ▼
Payment

User (Student)
        │
        ▼
Booking

Owner
        │
        ▼
Subscription

User
        │
        ▼
Notification
1. Users Collection

Stores information about both Students and Hostel Owners.

Fields
_id

name

email

password

phone

role

gender

city

googleId

verificationStatus

documents

createdAt

updatedAt
Business Rules
One collection is used for both Students and Owners.
User role determines system access.
Google Login is supported.
Students do not provide CNIC during signup.
Owner verification information is stored in the User collection for MVP.
One owner can manage multiple hostels.
2. Hostels Collection

Stores complete hostel information.

Fields
_id

ownerId

hostelName

description

city

address

location

hostelType

images

amenities

rules

status

verificationStatus

averageRating

totalReviews

createdAt

updatedAt
Business Rules
One owner can create multiple hostels.
Every hostel belongs to one owner.
Hostel images are stored as Cloudinary URLs.
Amenities are stored as an array.
Rules are stored as an array.
Only Admin-approved hostels are visible.
Hostel type is either Boys or Girls.
Soft Delete is used.
Deleted hostels remain inactive for 30 days before permanent deletion.
3. Rooms Collection

Stores room information inside a hostel.

Fields
_id

hostelId

roomNumber

floor

description

capacity

availableSeats

images

status

createdAt

updatedAt
Business Rules
Each room belongs to one hostel.
Capacity defines the maximum number of seats.
Owner cannot create seats beyond room capacity.
availableSeats updates automatically after every booking.
Room images are stored as Cloudinary URLs.
Capacity cannot be reduced while seats are booked.
Room status:
Active
Inactive
Maintenance
4. Seats Collection

Seat is the smallest bookable unit in StayNest.

Fields
_id

roomId

seatNumber

price

status

reservedBy

reservedAt

currentBookingId

createdAt

updatedAt
Status
Available

Reserved

Occupied

Maintenance
Business Rules
Students book individual seats, not entire rooms.
Every seat has its own price.
Owner manually creates seats.
Owner manually sets seat price.
Seat reservation expires after 30 minutes if payment is not completed.
After timeout, the seat automatically becomes available again.
Seat does not contain gender information because hostel filtering already handles it.
5. Bookings Collection

Stores every booking created by students.

Fields
_id

studentId

hostelId

roomId

seatId

residentDetails

bookingStatus

paymentStatus

paymentId

contractAccepted

contractUrl

checkInDate

checkOutDate

cancelledAt

cancellationReason

createdAt

updatedAt
Booking Status
Pending

Confirmed

Cancelled

Completed
Business Rules
Booking is created only after successful payment.
Seat is temporarily reserved before payment.
Digital hostel contract must be accepted.
Only one active booking is allowed per student.
Student provides CNIC and resident details during booking.
Cancellation is allowed only up to 3 days before check-in.
Cancellation charges are calculated as a percentage.
Owner cannot cancel a confirmed booking.
If two students try to book the same seat, the first successful request wins.
6. Payments Collection

Stores Stripe payment information.

Fields
_id

bookingId

studentId

ownerId

amount

commission

ownerAmount

currency

paymentMethod

stripePaymentIntentId

transactionId

paymentStatus

refundStatus

refundedAt

createdAt

updatedAt
Payment Status
Pending

Paid

Failed

Refunded
Business Rules
Stripe is used for payment processing.
StayNest deducts PKR 300 commission per booking.
Owner receives the remaining amount after approval.
Payment is held until owner approves the booking.
If owner rejects the booking, the student receives a refund within a maximum of 2 hours.
Payment retry is allowed within the 30-minute reservation window.
Payment confirmation is verified using Stripe Webhooks instead of frontend responses.
7. Subscriptions Collection

Stores hostel owner subscription information.

Fields
_id

ownerId

planName

planType

price

roomLimit

startDate

endDate

status

paymentId

createdAt

updatedAt
Plans
Free
Price: PKR 0
Room Limit: 5

Standard
Price: PKR 500
Room Limit: 15

Premium
Price: PKR 1000
Room Limit: Unlimited
Business Rules
Free plan allows up to 5 rooms.
Standard plan allows up to 15 rooms.
Premium allows unlimited rooms.
Every subscription is valid for 3 months.
Owner receives reminders 3 days before expiry and on the expiry day.
A 3-day grace period is provided after expiry.
If not renewed, extra rooms are hidden while the first 5 remain active.
Hidden rooms are restored after renewal.
8. Notifications Collection

Stores all system notifications.

Fields
_id

userId

title

message

type

isRead

referenceId

createdAt
Business Rules
Notifications are never permanently deleted.
Notifications support Read and Unread status.
Important notifications are sent through both Email and In-App notifications.
Admin receives notifications for important actions requiring review (owner verification, refund requests, reported hostels, payment issues).
Students receive booking, payment, and cancellation notifications.
Owners receive booking requests, subscription reminders, and verification updates.
Global Database Rules
MongoDB ObjectId references are used between collections.
Cloudinary stores images; MongoDB stores only image URLs.
Soft Delete is used for hostels.
Role-Based Access Control (RBAC) is implemented.
Every collection uses createdAt and updatedAt timestamps.
Backend validation is mandatory for all business rules.
Frontend validation is only for improving user experience.
One student can have only one active booking at a time.
Booking is always seat-based, not room-based.
Payment is processed using Stripe.
Payment confirmation is handled through Stripe Webhooks.
The system is designed to support future expansion to multiple cities across Pakistan.
Database Design Summary
Collections: 8

Users
Hostels
Rooms
Seats
Bookings
Payments
Subscriptions
Notifications

This database structure is optimized for scalability, maintainability, and future SaaS growth, while keeping the MVP simple enough to build and launch efficiently.


## 6. Image Storage

## 7. Payment System

## 8. Notification System

## 9. Authentication

## 10. Future Scalability