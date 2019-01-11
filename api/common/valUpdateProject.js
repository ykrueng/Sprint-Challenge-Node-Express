module.exports = (req, res, next) => {
  const { name, description, completed } = req.body;

  const validatedName = !name || (typeof name === "string" || name.length <= 128);
  const validatedDescription = !description || typeof description === "string";
  const validatedCompleted = !completed || typeof completed === "boolean";

  if (!validatedName || !validatedDescription || !validatedCompleted) {
    next({ code: 400 });
  } else if (!name && !description && !completed) {
    next({ code: 400 });
  } else {
    req.project = {
      name,
      description,
      completed
    };
    next();
  }
};
