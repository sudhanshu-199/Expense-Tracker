# Expense Tracker (Full Stack)

**Stack:** Node.js, Express, MongoDB (Mongoose), JWT auth, HTML/CSS/JS

## Local run
1. `npm install`
2. `.env.example` ko copy karke `.env` banao, apna MONGO_URI daalo
3. `npm start` -> http://localhost:3000

## Deploy (Vercel + MongoDB Atlas)
1. **MongoDB Atlas**: free M0 cluster banao -> Database Access me user banao -> Network Access me `0.0.0.0/0` allow karo -> "Connect > Drivers" se connection string copy karo (password aur DB name `expenses` daalna mat bhulna).
2. Project GitHub pe push karo.
3. **render.com** -> New > Web Service -> repo select karo.
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables: `MONGO_URI`, `JWT_SECRET`
4. Deploy dabao. Link mil jayega.

## API
- POST /api/register, POST /api/login
- GET/POST /api/expenses, DELETE /api/expenses/:id (JWT required)
