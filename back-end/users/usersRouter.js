const express = require("express");

const User = require("./User.js");

const router = express.Router();

router.get("/", (req, res) => {
  User.find({})
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.post("/", (req, res) => {
  const user = req.body;
  User.create(user)
    .then(data => res.status(201).json(`Saved: ${data}`))
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
