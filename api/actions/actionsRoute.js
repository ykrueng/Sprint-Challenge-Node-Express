const express = require("express");

const actionDb = require("../../data/helpers/actionModel");

const router = express.Router({ mergeParams: true });

router.get("/", (req, res, next) => {
  res.status(200).json(req.project.actions);
});

module.exports = router;
