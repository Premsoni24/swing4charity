const router = require("express").Router();
const User = require("../models/User");

// signup
router.post("/signup", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  res.json(user);
});

module.exports = router;