const express = require("express");
//const dbHelpers = require("../dbHelpers");
const router = express.Router();

module.exports = ({ getPlayers }) => {
  /* GET Players */

  router.get("/", (req, res) => {
    const id = req.params.id;
    // res.send(`Players ${id}`);

    getPlayers()
      .then((players) => res.json(players))
      // .then(res.send("Cities"))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );

  });
  router.get("/:id", (req, res) => {
    // res.json("city: Cities");
    res.json(cities);
  });

  return router;
};