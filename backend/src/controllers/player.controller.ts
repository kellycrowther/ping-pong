import * as playerService from "../services/player.service";

export function create(req, res, next) {
  playerService
    .create(req.body)
    .then((location) => res.json(location))
    .catch(next);
}

export function getAll(req, res, next) {
  playerService
    .getAll()
    .then((locations) => res.json(locations))
    .catch(next);
}

export function getById(req, res, next) {
  playerService
    .getById(req.params.id)
    .then((location) => res.json(location))
    .catch(next);
}

export function update(req, res, next) {
  playerService
    .update(req.params.id, req.body)
    .then((location) => res.json(location))
    .catch(next);
}

export function _delete(req, res, next) {
  playerService
    ._delete(req.params.id)
    .then(() => res.json({ message: "Player deleted successfully" }))
    .catch(next);
}

export function getAllRanked(req, res, next) {
  playerService
    .getAllRanked()
    .then((players) => res.json(players))
    .catch(next);
}
