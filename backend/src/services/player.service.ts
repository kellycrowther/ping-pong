import { db } from "../db/index";

export async function getAll() {
  return await db.Player.findAll();
}

export async function getById(id) {
  return await getPlayer(id);
}

export async function create(params) {
  return await db.Player.create(params);
}

export async function update(id, params) {
  const location = await getPlayer(id);

  Object.assign(location, params);
  await location.save();

  return location.get();
}

export async function _delete(id) {
  const location = await getPlayer(id);
  await location.destroy();
}

// helpers
async function getPlayer(id) {
  const player = await db.Player.findByPk(id);
  if (!player) {
    throw "Player not found";
  }
  return player;
}
