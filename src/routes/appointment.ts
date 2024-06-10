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

router.put('/appointment/to-paid', async (req, res) => {
  const { appointments_ids } = req.body;

  try {
    await Appointment.update({ status: 'paid' }, { where: { id: appointments_ids } });
    res.json({ message: 'Appointments updated successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating appointments.' });
  }
});

export default router;
