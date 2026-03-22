const router = require("express").Router();
const User = require("../models/User");

router.get("/run", async (req, res) => {
  const draw = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 45) + 1
  );

  const users = await User.find();

  const results = users.map(u => {
    const match = u.scores.filter(s => draw.includes(s)).length;
    return { email: u.email, match };
  });

  res.json({ draw, results });
});

module.exports = router;