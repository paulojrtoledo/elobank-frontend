Spendly 💰 — Frontend

Spendly is a personal finance management platform under active development, built with a focus on scalability, clean architecture and real-world application structure.

The frontend was designed to simulate the experience of a modern financial platform, emphasizing authentication flows, protected routes, API integration and maintainable frontend architecture.

🚧 Project Status: Active Development

🎯 Project Goal

The goal of Spendly is to build a realistic full stack financial application focused on:

Modern frontend architecture
Secure authentication flows
Backend integration with JWT
Scalable React application structure
Real-world user experience
Clean and maintainable code practices
🚀 Tech Stack
React 19
TypeScript
Vite
Tailwind CSS v4
React Router DOM v7
Axios
Context API
🧠 Domain Direction

Spendly was originally created as a digital banking simulation project and later evolved into a personal finance management platform.

This transition allowed the project to:

Represent a more realistic product scenario
Improve portfolio relevance
Focus on financial organization workflows
Enable future features such as dashboards, expense tracking and financial insights
Maintain strong technical architecture while improving product direction
🧱 Current Stage

The frontend currently includes:

Complete authentication flow
Protected and public route system
Authentication persistence
Backend integration with JWT
Context-based authentication architecture
User session handling
Dashboard structure
API communication layer with Axios
Form validation and error handling

The application continues evolving toward a complete personal finance platform integrated with the Spendly backend.

✅ Progress
Phase 1 — Authentication System (Completed)
Implemented features
Project structure setup
Login page
Register page
CPF and password validation
Axios API client
JWT authentication flow
Authentication persistence with localStorage
Axios interceptor for protected requests
Backend integration with Spring Boot API
Error handling and validation feedback
Auth context architecture
Route protection system
Dashboard initialization flow
🔐 Authentication Architecture

The authentication system was structured using React Context API and protected routing.

Implemented components
Component	Responsibility
AuthContext	Global authentication state
ProtectedRoute	Blocks unauthenticated access
PublicRoute	Prevents authenticated users from accessing public pages
Axios Interceptor	Automatically attaches JWT token
DashboardPage	Initial authenticated area
🔐 Authentication Flow
User submits CPF and password
Frontend sends request to backend
Backend validates credentials
JWT token is returned
Token is stored locally
AuthContext hydrates authentication state
Protected routes become accessible
Axios automatically attaches Authorization header
🌐 API Integration

The frontend communicates directly with the Spendly backend API.

Login

POST /auth/login

Request
{
  "cpf": "12345678901",
  "password": "123456"
}
Response
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "type": "Bearer"
}
Register Customer

POST /customers

Request
{
  "name": "Paulo Emilio",
  "cpf": "12345678901",
  "password": "123456",
  "email": "paulo@email.com"
}
Current Authenticated User

GET /customers/me

Headers
Authorization: Bearer <JWT_TOKEN>
🧠 Frontend Concepts Applied
Context API state management
Protected route architecture
Separation of concerns
Typed API communication
Form validation
Authentication persistence
Reusable service layer
React hooks architecture
Scalable folder organization
📦 Running Locally
Clone repository
git clone https://github.com/pauloemilio-tech/spendly-frontend.git
Navigate to project folder
cd spendly-frontend
Install dependencies
npm install
Run development server
npm run dev
🔗 Related Repository

Backend Repository:

https://github.com/pauloemilio-tech/spendly-backend

👤 Author

Paulo Emilio de Toledo Jr.
