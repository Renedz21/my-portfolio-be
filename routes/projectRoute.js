import express from 'express';
import { createProject, getProject, getProjects, updateProject } from '../controllers/projectsController.js';

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', createProject)
router.put('/:id', updateProject);

export default router;
