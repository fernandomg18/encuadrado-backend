import express from 'express';
import { User } from '../db';
import { UserModel } from '../types';

const router = express.Router();

router.get('/auth', async (req, res) => {
  try {
    const user: UserModel | null = await User.findOne({ where: { user: req.body.user } });
    if (user && req.body.password === user['password']) {
      const userWithoutPassword = { ...user.toJSON(), password: undefined };
      res.json(userWithoutPassword);
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
    } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
    }
  });

export default router;