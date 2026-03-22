const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connected"));

app.use("/auth", require("./routes/auth"));
app.use("/score", require("./routes/score"));
app.use("/draw", require("./routes/draw"));
app.use("/user", require("./routes/user"));
app.listen(5000, () => console.log("Server running"));