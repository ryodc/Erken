const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/auth", require("./routes/jwtauth"));
app.use("/joboffers", require("./routes/joboffers"));
app.use("/likedjobs", require("./routes/likedjobs"));
app.use("/profile", require("./routes/profile"));
app.use("/chat", require("./routes/chat"));

app.listen(5000, () => {
  console.log("server is running on port 5000")
})