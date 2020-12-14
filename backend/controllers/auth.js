const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const config = require("../config/auth");
const userModel = require("../models/user");


const signup = (username, email, password) => userModel.create(username, email, bcrypt.hashSync(password, 8));

const signin = async (req, res) => {
  const user = await userModel.findOne(req.body.username)

  if (!user) {
    return res.status(404).send({ message: "User Not found." });
  }

  const passwordIsValid = bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!"
    });
  }

  const token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 86400 // 24 hours
  });

  res.status(200).send({
    id: user._id,
    username: user.username,
    email: user.email,
    accessToken: token
  });
};

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  let user = await userModel.findOne(req.body.username);

  if (user) {
    res.status(400).send({ message: "Failed! Username is already in use!" });
    return;
  }

  user = await userModel.findOneByEmail(req.body.email)
  // Email

  if (user) {
    res.status(400).send({ message: "Failed! Email is already in use!" });
    return;
  }

  next();
};

module.exports = {
  signin,
  signup,
  checkDuplicateUsernameOrEmail
}