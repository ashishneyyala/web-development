import express from 'express';
import { getUsers, createUser } from '../models/user';

const router = express.Router();

router.get('/', (req, res) => {
  const users = getUsers();
  res.json(users);
});

router.post('/', (req, res) => {
  const { name, email } = req.body;
  const newUser = createUser(name, email);
  res.status(201).json(newUser);
});

export default router;


