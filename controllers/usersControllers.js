const loginController = async (req, res, next) => {
  const { name, password } = req.body;
  if ((name == "sohel", password == "sohel")) {
    res.send({ name, password, message: "ok login" });
  } else {
    res.send({ name, password, message: "login failed" });
  }
};
const signupController = async (req, res, next) => {
  const { name, password } = req.body;
  res.send({ name, password, message: "ok signup" });
};

const logoutController = (req, res) => {
  res.send({ message: "ok logout" });
};

module.exports = {
  loginController,
  signupController,
  logoutController,
};
