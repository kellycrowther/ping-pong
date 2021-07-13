import * as matchService from "../services/match.service";

export { create, getAll, getById, update, _delete };

function create(req, res, next) {
  matchService
    .create(req.body)
    .then((location) => res.json(location))
    .catch(next);
}

function getAll(req, res, next) {
  matchService
    .getAll()
    .then((locations) => res.json(locations))
    .catch(next);
}

function getById(req, res, next) {
  matchService
    .getById(req.params.id)
    .then((location) => res.json(location))
    .catch(next);
}

function update(req, res, next) {
  matchService
    .update(req.params.id, req.body)
    .then((location) => res.json(location))
    .catch(next);
}

function _delete(req, res, next) {
  matchService
    ._delete(req.params.id)
    .then(() => res.json({ message: "Match deleted successfully" }))
    .catch(next);
}
