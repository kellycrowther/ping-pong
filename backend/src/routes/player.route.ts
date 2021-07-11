import * as express from "express";
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("../_middleware/validate-request");

import {
  getAll,
  getById,
  update,
  create,
  _delete,
  getAllRanked,
} from "../controllers/player.controller";

// alias route
router.get("/ranked", getAllRanked);

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createPlayerSchema, create);
router.put("/:id", updatePlayerSchema, update);
router.delete("/:id", _delete);

module.exports = router;

function createPlayerSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function updatePlayerSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().empty(""),
  });
  validateRequest(req, next, schema);
}
