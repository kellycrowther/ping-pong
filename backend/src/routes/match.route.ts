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
} from "../controllers/match.controller";

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createMatchSchema, create);
router.put("/:id", updateMatchSchema, update);
router.delete("/:id", _delete);

module.exports = router;

function createMatchSchema(req, res, next) {
  const schema = Joi.object({});
  validateRequest(req, next, schema);
}

function updateMatchSchema(req, res, next) {
  const schema = Joi.object({});
  validateRequest(req, next, schema);
}
