const express = require("express");

const projectDb = require("../../data/helpers/projectModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projects = await projectDb.get();
    res.status(200).json(projects);
  } catch (err) {
    next({ code: 500 });
  }
});

module.exports = router;
