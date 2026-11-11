# 💰 Expense Tracker – Full Stack Web Application

A simple and user-friendly Expense Tracker application that helps users manage their daily expenses, track spending, and maintain their financial records in one place.

## 🚀 Live Demo

**[Visit Expense Tracker](https://expense-tracker-gules-six-15.vercel.app/)**

## 📌 Project Overview

Expense Tracker is a full-stack web application developed to make personal expense management easier. Users can create an account, securely log in, add their daily expenses, and manage their expense records.

The application uses MongoDB to store user and expense data, while Node.js and Express.js handle backend operations and API requests.

## ✨ Features

- **User Registration:** Create a new account.
- **Secure Login:** Authenticate users using JWT.
- **Password Encryption:** Passwords are hashed using bcrypt.
- **Add Expenses:** Record expenses with title, amount, and category.
- **View Expenses:** Retrieve previously added expenses.
- **Delete Expenses:** Remove unwanted expense records.
- **Database Integration:** Store data persistently using MongoDB Atlas.
- **Responsive Interface:** Simple and user-friendly interface.
- **Cloud Deployment:** Deployed using Vercel.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML | Frontend structure |
| CSS | Styling and layout |
| JavaScript | Frontend functionality |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB Atlas | Cloud database |
| Mongoose | Database modelling |
| JWT | User authentication |
| bcryptjs | Password hashing |
| Vercel | Application deployment |
| Git & GitHub | Version control |

## 📂 Project Structure

```text
Expense-Tracker/
│
├── api/
│   └── index.js
│
├── public/
│   └── index.html
│
├── server.js
├── package.json
├── package-lock.json
├── vercel.json
├── .env.example
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/sudhanshu-199/Expense-Tracker.git
```

### 2. Navigate to the Project

```bash
cd Expense-Tracker
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the placeholder values with your MongoDB Atlas connection string and a strong JWT secret.

### 5. Start the Application

```bash
npm start
```

Open your browser and visit:

```text
http://localhost:3000
```

## 🔌 API Endpoints

The application provides REST APIs for authentication and expense management.

### Authentication APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/register` | Register a new user |
| POST | `/api/login` | Authenticate an existing user |

### Expense Management APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/expenses` | Fetch user expenses |
| POST | `/api/expenses` | Add a new expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

**Authentication:** Expense management endpoints require a valid JWT token in the Authorization header.

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

## 🗄️ Database Structure

The application uses MongoDB with two main collections.

### Users Collection

- `_id`
- `name`
- `email`
- `password` (hashed)

### Expenses Collection

- `_id`
- `user`
- `title`
- `amount`
- `category`
- `date`

Each expense is associated with its respective user.

## ☁️ Deployment

The application is deployed using:

- **Frontend & Backend:** Vercel
- **Database:** MongoDB Atlas
- **Source Code:** GitHub

Environment variables are configured in Vercel Project Settings.

## 🔮 Future Enhancements

- Monthly and yearly expense reports.
- Interactive expense charts and visualizations.
- Budget planning and spending limits.
- Export expenses to CSV or PDF.
- Expense filtering by category and date.
- Income and savings management.

## 👨‍💻 Developer

**Sudhanshu Ranjan**

- GitHub: [sudhanshu-199](https://github.com/sudhanshu-199)
- Project Repository: [Expense Tracker](https://github.com/sudhanshu-199/Expense-Tracker)
- Live Application: [Expense Tracker – Vercel](https://expense-tracker-gules-six-15.vercel.app/)

---

⭐ If you find this project useful, consider giving it a star on GitHub!

**Built with ❤️ using Node.js, Express.js and MongoDB.**
