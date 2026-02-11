# 🛒 CodeAlpha Simple E-Commerce Store

A full-stack e-commerce web application built as part of the **CodeAlpha Full Stack Development Internship**.

---

## 🚀 Tech Stack

### 🎨 Frontend
- HTML5  
- CSS3  
- Vanilla JavaScript  
- LocalStorage (Cart Management)

### ⚙ Backend
- Node.js  
- Express.js  
- MongoDB Atlas (Cloud)  
- Mongoose  
- RESTful API  

---

## ✨ Features

- Product Listing Page  
- Product Details Page  
- Add to Cart (LocalStorage)  
- Order Processing  
- Stock Management  
- Persistent Cloud Database Storage  

---

## 🔁 Application Flow

1. User browses products  
2. Adds items to cart  
3. Cart is stored in LocalStorage  
4. Checkout sends order to backend  
5. Backend calculates total and updates stock  
6. Order is saved in MongoDB Atlas  

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

git clone https://github.com/IsmailAbed/CodeAlpha_SimpleEcommerce.git
cd CodeAlpha_SimpleEcommerce

2️⃣ Backend Setup
cd backend
npm install
npm run dev
⚠ Make sure you have a .env file configured with your MongoDB Atlas connection string:

PORT=5000
MONGO_URI=your_mongodb_connection_string

3️⃣ Frontend
Open:
frontend/index.html in your browser (or use Live Server in VS Code)

📦 API Endpoints

GET /api/products
→ Get all products

GET /api/products/:id
→ Get a single product by ID

POST /api/orders
→ Create a new order

---

## 📷 Screenshots
<img width="1910" height="957" alt="home" src="https://github.com/user-attachments/assets/bfcc58b4-02d6-488e-b7fe-089f4bb99af0" />

<img width="1905" height="957" alt="details" src="https://github.com/user-attachments/assets/a95f039e-c298-4c41-b75b-aced0d75c868" />

<img width="1895" height="960" alt="cart" src="https://github.com/user-attachments/assets/7d5bfd23-722e-4368-9f98-d551c3fd2963" />


