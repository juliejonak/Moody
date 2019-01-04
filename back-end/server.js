let { PythonShell } = require("python-shell");
const express = require("express");
const helmet = require("helmet");

const db = require("./db.js");
const usersRouter = require("./users/usersRouter.js");
const daysRouter = require("./days/daysRouter.js");

const cors = require("cors");

const server = express();

db.connectTo("moody")
  .then(() => console.log("Yes! DB achieved"))
  .catch(err => console.log("DB explosion:", err));

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/days", daysRouter);

server.get("/", (req, res) => {
  let pyshell = new PythonShell("test.py");
  const data = JSON.stringify({
    days: [
      {
        tags: ["Travel", "Work"],
        _id: "5c2da9cc3f6bfcb9fc9b320a",
        user: "5c2da1cf3f6bfcb9fc9b31ff",
        happiness: 1,
        stress: 2,
        energy: 3,
        sleep: 2,
        water: 2,
        alcohol: 2,
        caffiene: 2,
        food: 2,
        date: "2019-01-03T06:21:00.866Z",
        __v: 0,
      },
      {
        tags: ["Travel", "Work"],
        _id: "5c2da9ff3f6bfcb9fc9b320b",
        user: "5c2da9413f6bfcb9fc9b3208",
        happiness: 1,
        stress: 2,
        energy: 3,
        sleep: 2,
        water: 2,
        alcohol: 2,
        caffiene: 2,
        food: 2,
        date: "2019-01-03T06:21:51.417Z",
        __v: 1,
      },
    ],
    _id: "5c2da9413f6bfcb9fc9b3208",
    name: "abc",
    gender: "M",
    age: 12,
    __v: 0,
  });
  // sends a message to the Python script via stdin
  pyshell.send(data);

  pyshell.on("message", function(message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
  });

  // end the input stream and allow the process to exit
  pyshell.end(function(err, code, signal) {
    if (err) throw err;
    console.log("finished");
  });
  res.send("Run API run");
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
