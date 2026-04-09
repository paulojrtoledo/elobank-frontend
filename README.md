Elo Bank 💳 — Frontend

Elo Bank is a digital banking platform under development, built with focus on security, scalability and best practices. The project simulates a real bank, allowing account opening, transfers (PIX/TED), Pix key management and secure authentication.

🚧 Project Status: Active development

🎯 Project Goal

Build a full stack application from scratch that demonstrates:

Mastery of React, TypeScript and ecosystem
Clean component architecture and best practices
Ability to build a full stack application
🚀 Tech Stack
React 19
TypeScript
Vite
Tailwind CSS v4
React Router DOM v7
Axios
✅ Progress
Phase 1 — Authentication (Completed)
✅ Project structure
✅ Login page with CPF and password validation
✅ Controlled inputs with React state
✅ API client configuration (Axios)
✅ Customer registration page
✅ Integration with backend (POST /customers)
✅ Form validation aligned with backend rules
✅ Error handling with API responses
✅ Login integration with backend (POST /auth/login)
✅ JWT token storage (localStorage)
✅ Axios interceptor to attach Authorization header
✅ Authentication flow integrated with backend
Phase 2 — Core Features (In progress)
⏳ Dashboard (initial structure)
⏳ Fetch authenticated user data (GET /customers/me)
⏳ Transactions
⏳ Pix key management
⏳ Transaction history
🔐 Authentication Flow

Complete authentication flow implemented:

User submits CPF and password
Frontend calls POST /auth/login
Backend returns JWT token
Token is stored in localStorage
Axios interceptor attaches token to all requests
Protected requests include Authorization: Bearer <token>
Backend validates token and identifies user

🌐 API Integration
Login
POST /auth/login

Request:

{
  "cpf": "12345678901",
  "password": "123456"
}

Response:

{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "type": "Bearer"
}
Get Current User
GET /customers/me

Headers:

Authorization: Bearer <JWT_TOKEN>
🔗 Related Repository

Backend:
https://github.com/paulojrtoledo/elobank-backend

📦 How to run locally
# Clone the repository
git clone https://github.com/paulojrtoledo/elobank-frontend.git

# Access the folder
cd elobank-frontend

# Install dependencies
npm install

# Run development server
npm run dev
👤 Author

Paulo Emilio de Toledo Jr
