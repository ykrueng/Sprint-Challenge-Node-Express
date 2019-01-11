const express = require("express");

const actionDb = require("../../data/helpers/actionModel");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res, next) => {
  try {
    const actions = await actionDb.get();
    res.status(200).json(actions);
  } catch (err) {
    next({ code: 500 });
  }
});

module.exports = router;
