import express from 'express';
import { getInContact } from '../controllers/contactController.js'

const router = express.Router();

router.post('/', getInContact)

export default router;
