const router = require("express").Router();
const User = require("../models/User");

// subscribe
router.post("/subscribe", async (req, res) => {
  const user = await User.findById(req.body.userId);
  user.subscribed = true;
  await user.save();
  res.json(user);
});

// charity
router.post("/charity", async (req, res) => {
  const user = await User.findById(req.body.userId);
  user.charity = req.body.charity;
  await user.save();
  res.json(user);
});

module.exports = router;