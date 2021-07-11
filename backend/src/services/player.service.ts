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

/**
 * TODO: Should search for who won the most matches, then look at total games won to determine ranking
 */
export async function getAllRanked() {
  const [results, metadata] = await db.sequelize.query(
    `SELECT DISTINCT playerId, Players.name, SUM(gamesWon) totalGamesWon 
      FROM Results
      INNER JOIN Players On Players.id = Results.playerId
      GROUP BY playerId 
      ORDER BY SUM(gamesWon) DESC`
  );

  return results;
}

// helpers
async function getPlayer(id) {
  const player = await db.Player.findByPk(id);
  if (!player) {
    throw "Player not found";
  }
  return player;
}
