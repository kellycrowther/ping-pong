import { db } from "../db/index";

export async function getAll() {
  const include = await createInclude();
  return await db.Result.findAll({
    include,
  });
}

export async function getById(id) {
  return await getResult(id);
}

export async function create(params) {
  return await createResult(params);
}

export async function update(id, params) {
  const result = await getResult(id);

  Object.assign(result, params);
  await result.save();

  return result.get();
}

export async function _delete(id) {
  const result = await getResult(id);
  await result.destroy();
}

// helpers
async function getResult(id) {
  const include = await createInclude();
  const result = await db.Result.findByPk(id, {
    include,
  });
  if (!result) {
    throw "Result not found";
  }
  return result;
}

async function createInclude() {
  return await [
    {
      model: db.Score,
      as: "scores",
    },
  ];
}

export async function createResult(params, matchId?: string) {
  const include = await createInclude();
  params = {
    ...params,
    matchId,
  };

  const resultInstance = await db.Result.create(params, {
    include,
  });

  return await getResult(resultInstance.id);
}
