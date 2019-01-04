const express = require("express");
const { PythonShell } = require("python-shell");

const Day = require("./Day.js");
const User = require("../users/User.js");
const router = express.Router();

router.get("/", (req, res) => {
  Day.find({})
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.get("/:id", (req, res) => {
  Day.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.post("/", (req, res) => {
  const day = req.body;
  Day.create(day)
    .then(async data => {
      const user = await User.findById(day.user);
      user.days.push(data._id);
      user.save(async function(err, data) {
        if (err) console.log("error", err);

        const updatedUser = await User.findById(day.user).populate("days");
        let pyshell = new PythonShell("test2.py");
        // sends a message to the Python script via stdin

        pyshell.send(JSON.stringify(updatedUser));

        pyshell.on("message", function(message) {
          // received a message sent from the Python script (a simple "print" statement)
          console.log(message);
        });

        // end the input stream and allow the process to exit
        pyshell.end(function(err, code, signal) {
          if (err) throw err;
          console.log("finished");
        });

        res.status(201).json(`Saved: ${data}`);
      });
    })
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
