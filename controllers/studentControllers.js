const applyController = async (req, res, next) => {
  const { name, college, year } = req.body;
  res.send({ name, college, year });
};

module.exports = {
  applyController,
};
