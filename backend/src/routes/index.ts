import * as express from "express";
const router = express.Router();

const player = require("./player.route");
const match = require("./match.route");

router.use("/players", player);
router.use("/matches", match);

module.exports = router;
