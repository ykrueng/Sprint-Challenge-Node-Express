const express = require("express");

const projectDb = require("../../data/helpers/projectModel");
const valProject = require("../common/valProject");
const getProject = require("../common/getProject");

const router = express.Router();

router
  .get("/", async (req, res, next) => {
    try {
      const projects = await projectDb.get();
      res.status(200).json(projects);
    } catch (err) {
      next({ code: 500 });
    }
  })
  .post("/", valProject, async (req, res, next) => {
    try {
      const newProject = await projectDb.insert(req.project);
      if (newProject) {
        res.status(200).json(newProject);
      } else {
        next({ code: 500 });
      }
    } catch (err) {
      next({ code: 500 });
    }
  })
  .get("/:projectId", getProject, (req, res, next) => {
    res.status(200).json(req.project);
  })
  .delete("/:projectId", getProject, async (req, res, next) => {
    const { projectId } = req.params;
    try {
      const deleted = await projectDb.remove(projectId);
      if (deleted === 1) {
        res.sendStatus(204);
      }
    } catch (err) {
      next({ code: 500 });
    }
  });

module.exports = router;
