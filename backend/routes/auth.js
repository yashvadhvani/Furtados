const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth')

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post('/signup', async (req, res) => {
  try {
    await authController.signup(req.body.username, req.body.email, req.body.password);
    res.send({ message: "User was registered successfully!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/signin', async (req, res) => {
  try {
    return (await authController.signin(req, res));
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router;