module.exports = (req, res, next) => {
  const { name, description, completed } = req.body;

  const validatedName = name && typeof name === "string" && name.length <= 128;
  const validatedDescription = description && typeof description === "string";

  if (!validatedName || !validatedDescription) {
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
