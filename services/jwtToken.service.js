const JwtToken = require("../models/JwtToken")


async function storeJwtInDb(userId , token , role) {
  const tokenDoc = new JwtToken({
    userId: userId,
    token: token,
    role : role
  });
  await tokenDoc.save();
}

async function getJwtFromDb(userId) {
  const tokenDoc = await JwtToken.findOne({ userId: userId });
    if (tokenDoc) {
    return tokenDoc.token;
  } else {
    return null;
  }
}

module.exports = {
  storeJwtInDb,
  getJwtFromDb
}


