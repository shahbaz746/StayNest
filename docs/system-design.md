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

## 5. Database

## 6. Image Storage

## 7. Payment System

## 8. Notification System

## 9. Authentication

## 10. Future Scalability