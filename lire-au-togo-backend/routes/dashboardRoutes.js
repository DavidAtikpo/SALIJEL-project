import express from 'express';
import { protect, admin } from'../middleware/auth.js';

const router = express.Router();

router.get('/user', protect, (req, res) => {
  res.json({ message: 'Welcome to the user dashboard', user: req.user });
});

router.get('/admin', protect, admin, (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard', user: req.user });
});

export default router;
