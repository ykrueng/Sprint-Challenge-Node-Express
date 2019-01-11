const express = require("express");

const actionDb = require("../../data/helpers/actionModel");
const valActions = require("../common/valActions");
const getAction = require("../common/getAction");

const router = express.Router({ mergeParams: true });

router
  .get("/", (req, res, next) => {
    res.status(200).json(req.project.actions);
  })
  .post("/", valActions, async (req, res, next) => {
    const { projectId } = req.params;
    try {
      const newAction = await actionDb.insert({
        project_id: projectId,
        ...req.action
      });
      if (newAction) {
        res.status(201).json(newAction);
      } else {
        next({ code: 500 });
      }
    } catch (err) {
      next({ code: 500 });
    }
  })
  .get("/:actionId", getAction, (req, res, next) => {
    res.status(200).json(req.action);
  });

module.exports = router;
