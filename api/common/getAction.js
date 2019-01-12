module.exports = (req, res, next) => {
  const { actionId } = req.params;
  console.log(actionId);

  if (isNaN(actionId)) {
    next({ code: 400 });
  } else {
    const action = req.project.actions.find(action => action.id === Number(actionId));
    if (action) {
      req.action = action;
      next();
    } else {
      next({ code: 400 });
    }
  }
};
