import express from 'express';
import { Appointment, User } from '../db';

const router = express.Router();

router.get('/users', async (_req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

router.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

router.get('/user/:id/appointments', async (req, res) => {
  const { id } = req.params;

  try {
    const appointments = await Appointment.findAll({ where: { user_id: id } });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching appointments.' });
  }
});

export default router;