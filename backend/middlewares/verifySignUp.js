const authController = require("../controllers/auth");

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  try {
    return authController.checkDuplicateUsernameOrEmail(req, res, next)
  } catch (error) {
    res.status(500).send({ message: err });
    return;
  }
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
