const addProjectController = async (req, res, next) => {
  const { name } = req.body;
  res.send({ name, message: "Project added successfully" });
};

const deleteProjectController = async (req, res, next) => {
  const { name } = req.body;
  res.send({ name, message: "Project deleted successufully" });
};

const reviewApplicationController = async (req, res, next) => {
  const { review } = req.body;
  res.send({ review, message: "ok" });
};

module.exports = {
  addProjectController,
  deleteProjectController,
  reviewApplicationController,
};
