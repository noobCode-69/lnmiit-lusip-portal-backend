const jwt = require("jsonwebtoken");
require("dotenv").config();
const {getJwtFromDb} = require("../services/jwtToken.service")
const secretKey = "mysecretkey";

module.exports =async function (req, res, next) {
  try {
    const authHeader = req.header("Authorization").split(" ");
    const token = authHeader[1];
    if (!token) {
      return res.status(401).json({ message: "user not logged in" });
    }
    const decoded = jwt.verify(token, secretKey);
    const userId = decoded.userId;
    const storedToken = await getJwtFromDb(userId);
    if (token !== storedToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.userId = userId;
    next();
  } catch (e) {
    console.error(e);
    res.status(400).send({ message: "Invalid Token", error: e });
  }
};
