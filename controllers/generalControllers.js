const getAllProjectsController = async (req, res, next) => {
  res.send({ message: "all projects" });
};

const getAllResponseController = async (req, res, next) => {
  res.send({ message: "all response" });
};

module.exports = {
  getAllProjectsController,
  getAllResponseController,
};
