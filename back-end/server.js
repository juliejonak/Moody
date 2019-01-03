const express = require("express");
const helmet = require("helmet");

const db = require("./db.js");
const usersRouter = require("./users/usersRouter.js");
const daysRouter = require("./days/daysRouter.js");

const cors = require('cors');

const server = express();

db.connectTo("moody")
  .then(() => console.log("Yes! DB achieved"))
  .catch(err => console.log("DB explosion:", err));

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/days", daysRouter);

server.get("/", (req, res) => res.send("Run API run"));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
