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

```bash
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
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get single product
POST	/api/orders	Create new order
