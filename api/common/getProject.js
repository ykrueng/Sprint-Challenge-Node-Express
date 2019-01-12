const projectDb = require("../../data/helpers/projectModel");

module.exports = async (req, res, next) => {
  const { projectId } = req.params;

  if (isNaN(projectId)) {
    next({ code: 400 });
  } else {
    try {
      const project = await projectDb.get(projectId);
      if (project) {
        req.project = project;
        next();
      } else {
        next({ code: 400 });
      }
    } catch {
      next({ code: 500 });
    }
  }
};
