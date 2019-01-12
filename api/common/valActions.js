module.exports = (req, res, next) => {
  const { description, notes, completed } = req.body;

  const validatedDescription = description && typeof description === "string" && description.length <= 128;
  const validateNotes = notes && typeof notes === "string";

  if (!validatedDescription || !validateNotes) {
    next({ code: 400 });
  } else {
    req.action = {
      description,
      notes,
      completed
    };
    next();
  }
};
