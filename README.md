🚀 ProjectAI – Your AI-Powered Coding Partner
📌 Overview
ProjectAI is an advanced AI-powered software engineer that collaborates with your team to write, debug, and execute code seamlessly. It acts as an intelligent coding assistant, helping developers build, test, and run applications directly in the browser or on a server.

🎯 Key Features
✅ Collaborative AI Engineer – Works alongside your team to write efficient, high-quality code.
✅ Code Execution & Server Management – Runs your applications and services directly.
✅ Real-time Debugging – Helps identify and fix issues instantly.
✅ Smart Code Suggestions – Optimizes your code for performance and readability.


🤖 How ProjectAI Works?
AI-Assisted Development – It understands your project requirements and writes structured code.

Real-Time Collaboration – Work together with AI & teammates on the same codebase.

Live Code Execution – Runs the code and manages the server environment.

Continuous Learning – Improves suggestions based on your coding style.

📌 Why Use ProjectAI?
🔹 Boost team productivity with AI-powered coding.
🔹 Reduce bugs & errors with real-time debugging.
🔹 Automate server management for smooth deployment.
🔹 Improve code quality & efficiency with optimized AI recommendations.

⚡ Start Building with ProjectAI Today!
Let AI be your coding teammate and take your development process to the next level! 🚀🔥


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


# 🚀 **Adding Logout Route with Token Blacklisting**  

## 📌 **Overview**  
This guide explains how to implement **user logout functionality** by blacklisting JWT tokens in MongoDB. The blacklisted tokens expire after **24 hours**, ensuring security.  

---

## 📌 **Steps to Implement**  

### **1️⃣ Create Token Blacklist Model**  
- Define a **`tokenBlacklist.model.js`** file to store blacklisted tokens with a **TTL (Time-To-Live) of 24 hours**.

### **2️⃣ Update Authentication Middleware**  
- Modify `auth.middleware.js` to **check if a token is blacklisted** before granting access.

### **3️⃣ Implement Logout Controller**  
- In `user.controller.js`, create a **logout function** that:  
  - **Adds the token to the blacklist**  
  - **Clears the authentication cookie (if applicable)**  
  - **Prevents further use of the token**  

### **4️⃣ Define Logout Route**  
- Add a `/logout` route in `user.route.js` that calls the logout controller and **requires authentication**.

---

## ✅ **How to Test?**  

1️⃣ **Start the server:**  
```bash
npm run dev
```

2️⃣ **Login to get a token:**  
```bash
curl -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d '{"email": "user@example.com", "password": "123456"}'
```

3️⃣ **Logout and blacklist the token:**  
```bash
curl -X POST http://localhost:3000/api/logout -H "Authorization: Bearer your_jwt_token_here"
```

4️⃣ **Try accessing a protected route (should fail):**  
```bash
curl -X GET http://localhost:3000/api/profile -H "Authorization: Bearer your_jwt_token_here"
```

---

## 🎯 **Final Notes**  
- **Tokens automatically expire in 24 hours** (MongoDB TTL).  
- **Ensures logged-out users cannot reuse old tokens.**  
- **Improves security by blocking unauthorized access.**  

Now your logout system is **secure & efficient!** 🚀🔒

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


