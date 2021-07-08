import * as express from "express";
const router = express.Router();

const player = require("./player.route");

router.use("/players", player);

module.exports = router;
