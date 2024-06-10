import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Appointment } from '../db';

const router = express.Router();

router.get('/appointment/:id', async (_req, res) => {
    try {
        const appointments = await Appointment.findAll({ where: { id: _req.params.id } });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while fetching appointments.' });
    }
});

router.post('/appointment', async (req, res) => {
  const { user_id, amount, status, email, date } = req.body;
  const id = uuidv4();

  try {
    const newAppointment = await Appointment.create({ 
    id,
    user_id, 
    amount,
    status,
    email,
    date
    });

    res.json(newAppointment);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the appointment.' });
  }
});

router.put('/appointment/status/:id', async (req, res) => {
  const { status } = req.body;

  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (appointment) {
      appointment.status = status;
      await appointment.save();
      res.json(appointment);
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating the appointment.' });
  }
});

export default router;
