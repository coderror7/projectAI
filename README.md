# **User Authentication API (Express, MongoDB, JWT)**

This is a **Node.js backend API** built using **Express.js**, **MongoDB**, and **JWT Authentication**. It includes **user registration, login, and authentication middleware** with hashed passwords.

---

## **🚀 Features**

✅ User Registration & Login with validation  
✅ JWT Authentication & Secure Routes  
✅ Password Hashing using Bcrypt  
✅ Express Middleware for Authentication  
✅ MongoDB Connection using Mongoose  
✅ Cookie-based Authentication Support  
✅ Structured Code (MVC Architecture)  

---

## **📁 Project Structure**
```
/backend
│── db/
│   ├── db.js                 # Database connection
│
│── models/
│   ├── user.model.js         # User schema & authentication methods
│
│── routes/
│   ├── user.route.js         # User-related routes (register, login, profile)
│
│── controllers/
│   ├── user.controller.js    # Handles user registration, login & profile
│
│── services/
│   ├── user.services.js      # Business logic for creating users
│
│── middlewares/
│   ├── auth.middleware.js    # Authentication middleware for protected routes
│
│── server.js                 # Main server file
│── app.js                    # Express app configuration
│── .env                      # Environment variables
│── README.md                 # Project documentation
```

---

## **🛠️ Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/projectAI.git
cd projectAI/backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Create a `.env` File**
Create a `.env` file in the project root and add the following environment variables:
```sh
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### **4️⃣ Start the Server**
```sh
npm start
```

---

## **📌 API Endpoints**

### **1️⃣ User Registration**
**POST** `/users/register`
#### **Request Body:**
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```
#### **Response:**
```json
{
  "user": { "email": "test@example.com", "_id": "123abc" },
  "token": "JWT_TOKEN"
}
```

### **2️⃣ User Login**
**POST** `/users/login`
#### **Request Body:**
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```
#### **Response:**
```json
{
  "user": { "email": "test@example.com", "_id": "123abc" },
  "token": "JWT_TOKEN"
}
```

### **3️⃣ Get User Profile (Protected Route)**
**GET** `/users/profile`
- **Requires authentication (`JWT Token` in Headers or Cookies)**
#### **Response:**
```json
{
  "user": { "email": "test@example.com", "_id": "123abc" }
}
```

---

## **🔐 Authentication & Security**
- Passwords are **hashed** using `bcrypt` before storing in the database.
- User authentication is handled using **JWT tokens**.
- Routes are **protected** using authentication middleware.

---


# React Vite App with React Router

This is a React project bootstrapped with **Vite** and configured with **React Router DOM** to manage routing. The project currently has dummy routes like **Home, Login, and Register** for testing navigation.

## 🚀 Getting Started

### 1️⃣ Prerequisites
Make sure you have **Node.js** installed on your machine. You can check by running:
```sh
node -v
```

### 2️⃣ Installation
Clone the repository and install dependencies:
```sh
git clone <your-repo-url>
cd <your-project-folder>
npm install
```

### 3️⃣ Run the Development Server
Start the Vite development server:
```sh
npm run dev
```
Vite will start the server and provide a local URL, usually:
```
http://localhost:5173
```

## 📌 Project Structure
```
📂 src
 ├── 📂 routes
 │   ├── AppRoutes.jsx
 ├── 📂 assets
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## 📌 Routing Setup (React Router DOM)
The project uses **React Router DOM** for navigation. The routes are defined in `AppRoutes.jsx`:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Login from '../routes/Login';
import Register from '../routes/Register';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
```

## 🎨 Tailwind CSS Setup
The project uses **Tailwind CSS** for styling. Tailwind is already configured in `index.css`.

To ensure Tailwind is installed and working correctly, check the `tailwind.config.js` file and use the following command to build styles:
```sh
npm run dev
```

## 🛠 Tech Stack
- **React.js** (Frontend Framework)
- **Vite** (Fast build tool for React apps)
- **React Router DOM** (Routing)
- **Tailwind CSS** (Styling for a modern UI)

## 📌 Useful Commands
- Start development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

---

## **🌟 Contributing**
Feel free to fork and contribute to this project by submitting a pull request.

---

### 🎯 Happy Coding! 🚀


