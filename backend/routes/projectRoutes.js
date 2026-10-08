const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);
router.post("/submit", projectController.submitProject);

module.exports = router;
