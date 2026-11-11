require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is required');
}

const SECRET = process.env.JWT_SECRET;

// ---------- Models ----------
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
}));
const Expense = mongoose.model('Expense', new mongoose.Schema({
  user: mongoose.Schema.Types.ObjectId,
  title: String,
  amount: Number,
  category: String,
  date: { type: Date, default: Date.now },
}));

// ---------- DB connection (cached for Vercel serverless) ----------
let conn;
app.use('/api', async (req, res, next) => {
  try {
    if (!conn) conn = mongoose.connect(process.env.MONGO_URI);
    await conn;
    next();
  } catch (e) {
    conn = null;
    res.status(500).json({ error: 'Database connect nahi hua' });
  }
});

// ---------- Auth middleware ----------
function auth(req, res, next) {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  try {
    req.userId = jwt.verify(token, SECRET).id;
    next();
  } catch {
    res.status(401).json({ error: 'Login required' });
  }
}

// ---------- Auth routes ----------
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'Sab fields bharo' });
    const user = await User.create({ name, email, password: await bcrypt.hash(password, 10) });
    res.json({ token: jwt.sign({ id: user._id }, SECRET, { expiresIn: '7d' }), name });
  } catch {
    res.status(400).json({ error: 'Email already registered hai' });
  }
});

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !(await bcrypt.compare(req.body.password, user.password)))
    return res.status(400).json({ error: 'Email ya password galat hai' });
  res.json({ token: jwt.sign({ id: user._id }, SECRET, { expiresIn: '7d' }), name: user.name });
});

// ---------- Expense routes ----------
app.get('/api/expenses', auth, async (req, res) => {
  res.json(await Expense.find({ user: req.userId }).sort({ date: -1 }));
});

app.post('/api/expenses', auth, async (req, res) => {
  const { title, amount, category } = req.body;
  if (!title || !(amount > 0)) return res.status(400).json({ error: 'Title aur valid amount do' });
  res.json(await Expense.create({ user: req.userId, title, amount, category }));
});

app.delete('/api/expenses/:id', auth, async (req, res) => {
  await Expense.deleteOne({ _id: req.params.id, user: req.userId });
  res.json({ ok: true });
});

// ---------- Start ----------
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => console.log('Server chal raha hai: http://localhost:' + PORT)))
    .catch(err => console.error('MongoDB connect error:', err.message));
}
module.exports = app;
