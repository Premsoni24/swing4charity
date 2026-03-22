const router = require("express").Router();
const User = require("../models/User");

router.post("/add", async (req, res) => {
  const { userId, score } = req.body;

  const user = await User.findById(userId);

  if (user.scores.length >= 5) {
    user.scores.shift();
  }

  user.scores.push(score);
  await user.save();

  res.json(user);
});

module.exports = router;