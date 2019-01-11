const express = require("express");

const actionDb = require("../../data/helpers/actionModel");
const valActions = require("../common/valActions");
const getAction = require("../common/getAction");
const valUpdateAction = require("../common/valUpdateAction");

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
  })
  .delete("/:actionId", getAction, async (req, res, next) => {
    const { actionId } = req.params;
    try {
      const deleted = await actionDb.remove(actionId);
      if (deleted === 1) {
        res.sendStatus(204);
      } else {
        next({ code: 500 });
      }
    } catch (err) {
      next({ code: 500 });
    }
  })
  .put("/:actionId", getAction, valUpdateAction, async (req, res, next) => {
    const { actionId } = req.params;
    try {
      const updatedAction = await actionDb.update(actionId, req.newAction);
      if (updatedAction) {
        res.status(200).json(updatedAction);
      } else {
        next({ code: 500 });
      }
    } catch (err) {
      next({ code: 500 });
    }
  });

module.exports = router;
