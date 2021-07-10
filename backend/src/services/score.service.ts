import { db } from "../db/index";

export async function getAll() {
  return await db.Score.findAll();
}

export async function getById(id) {
  return await getScore(id);
}

export async function create(params) {
  return await createScore(params);
}

export async function update(id, params) {
  const score = await getScore(id);

  Object.assign(score, params);
  await score.save();

  return score.get();
}

export async function _delete(id) {
  const score = await getScore(id);
  await score.destroy();
}

// helpers
async function getScore(id) {
  const score = await db.Score.findByPk(id);
  if (!score) {
    throw "Score not found";
  }
  return score;
}

export async function createScore(params, resultId?: string) {
  params = {
    ...params,
    resultId,
  };

  console.info("SCORE params: ", params);
  const scoreInstance = await db.Score.create(params);

  return await getScore(scoreInstance.id);
}
