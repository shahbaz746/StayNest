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


## 3. Frontend Architecture

                   React Application
                          │
     ┌────────────────────┼────────────────────┐
     │                    │                    │
     ▼                    ▼                    ▼
   Public             Authentication      Protected App
     │                    │                    │
     ▼                    ▼                    ▼
Landing Page        Login / Signup      Student / Owner / Admin


FOLDER STRUCTURE


src/
├── assets/
├── components/
│   ├── ui/
│   ├── common/
│   ├── hostel/
│   ├── booking/
│   └── dashboard/
├── pages/
│   ├── public/
│   ├── auth/
│   ├── student/
│   ├── owner/
│   └── admin/
├── layouts/
├── routes/
│   ├── ProtectedRoute.jsx
│   └── RoleRoute.jsx
├── context/
│   ├── AuthContext.jsx
│   └── NotificationContext.jsx
├── hooks/
├── services/
├── utils/
├── constants/
├── lib/
├── styles/
├── App.jsx
└── main.jsx

## 4. Backend Architecture

## 5. Database

## 6. Image Storage

## 7. Payment System

## 8. Notification System

## 9. Authentication

## 10. Future Scalability