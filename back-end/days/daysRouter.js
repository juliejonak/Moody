const express = require("express");
const { PythonShell } = require("python-shell");

const Day = require("./Day.js");
const User = require("../users/User.js");
const router = express.Router();

router.get("/", (req, res) => {
  Day.find({})
    .then(data => {
      // Test: Move me //////////
      //   PythonShell.run("plotscript.py", null, function(err) {
      //     if (err) throw err;
      //     console.log("finished");
      //   });
      //////////////////

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
      user.save(function(err) {
        console.log("error", err);
      });
      PythonShell.run("plotscript.py", null, function(err) {
        if (err) throw err;
      });
      res.status(201).json(`Saved: ${data}`);
    })
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
