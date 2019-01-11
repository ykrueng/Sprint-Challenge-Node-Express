module.exports = (req, res, next) => {
  const { description, notes, completed } = req.body;

  const validatedDescription = !description || (typeof description === "string" || description.length <= 128);
  const validatedNotes = !notes || typeof notes === "string";
  const validatedCompleted = !completed || typeof completed === "boolean";

  if (!validatedDescription || !validatedNotes || !validatedCompleted) {
    next({ code: 400 });
  } else if (!description && !notes && !completed) {
    next({ code: 400 });
  } else {
    req.newAction = {
      description,
      notes,
      completed
    };
    next();
  }
};
