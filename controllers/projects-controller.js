//Models
const Project = require("../models/Project");
//Midlleware
const checkValidationErrors = require("../midlleware/checkValidationErrors");
//Controllers
const MsgsController = require("./msgs-controller");

// @desc    Get all projects
// @route   GET /api/projects
// access   Public
exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ date: -1 });

    res.status(200).json({ count: projects.length, projects });
  } catch (error) {
    console.error(error.message);
    res.status(500).json(MsgsController.ServerError());
  }
};

// @desc    Get single project
// @route   GET /api/projects/projects/:id
// access   Public
exports.getProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(400).json(MsgsController.NotFound("Project"));
    }

    res.status(200).json({ project });
  } catch (error) {
    console.error(error.message);
    res.status(500).json(MsgsController.ServerError());
  }
};

// @desc    Create new project
// @route   POST /api/projects/projects
// access   Private
exports.createProject = async (req, res, next) => {
  checkValidationErrors(req, res);
  try {
    const { name, id } = req.user;
    const { title, description, stage } = req.body;
    const author = {
      id,
      name
    };

    const project = new Project({
      author,
      title,
      description,
      stage
    });
    await project.save();

    res.status(201).json({ project });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

// @desc    Update project
// @route   PUT /api/projects/projects/:id
// access   Private
exports.updateProject = async (req, res, next) => {
  checkValidationErrors(req, res);
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!project) {
      return res.status(400).json(MsgsController.NotFound("Project"));
    }

    res.status(200).json({ project });
  } catch (error) {
    console.error(error.message);
    res.status(500).json(MsgsController.ServerError());
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/projects/:id
// access   Private
exports.deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(400).json(MsgsController.NotFound("Project"));
    }

    res.status(200).json(MsgsController.Success());
  } catch (error) {
    console.error(error.message);
    res.status(500).json(MsgsController.ServerError());
  }
};
