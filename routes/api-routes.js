const express = require("express");
const router = express.Router();

router.get("/example", (req, res) => {
  console.log("The end-point was hit");
  res.send({ message: "Success" });
});

module.exports = router;
