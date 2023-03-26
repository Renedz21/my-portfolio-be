import express from 'express';
import { createProject, getProject, getProjects } from '../controllers/projectsController.js';

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', createProject)

export default router;
