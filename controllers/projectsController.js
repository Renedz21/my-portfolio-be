import Project from "../models/projectsSchema.js";
import createError from "../utils/createError.js";

export const getProjects = async (req, res, next) => {

    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        next(createError(500, "Something went wrong"));
    }

}

export const getProject = async (req, res, next) => {

    const { id } = req.params;

    try {
        const project = await Project.findById(id);
        res.status(200).json(project);
    } catch (error) {
        next(createError(500, "Something went wrong"));
    }

}

export const createProject = async (req, res, next) => {

    try {
        const project = await Project.create(req.body);
        const newProject = await project.save();
        res.status(201).json({ message: "Project created", newProject });
    } catch (error) {
        next(createError(500, "Something went wrong"));
    }

}