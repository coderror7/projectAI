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

## **🌟 Contributing**
Feel free to fork and contribute to this project by submitting a pull request.

---

## **📜 License**
This project is **open-source** and available under the **MIT License**.

---

✅ **Now you're all set!** 🚀 Happy Coding! 🎉

