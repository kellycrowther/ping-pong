import { db } from "../db/index";
import { createResult } from "./result.service";
import { createScore } from "./score.service";

export async function getAll() {
  const include = await createInclude();
  return await db.Match.findAll({
    include,
  });
}

export async function getById(id) {
  return await getMatch(id);
}

export async function create(params) {
  const include = await createInclude();

  const match = await db.Match.create(params, {
    include,
  });

  // Create the results and scores
  Object.keys(params).forEach(async (key) => {
    const inResult = params[key];
    const outResult = await createResult(inResult, match.id);

    await createScore(params, outResult.id);
  });

  return match.get();
}

export async function update(id, params) {
  const match = await getMatch(id);

  Object.assign(match, params);
  await match.save();

  return match.get();
}

export async function _delete(id) {
  const match = await getMatch(id);
  await match.destroy();
}

// helpers
async function getMatch(id) {
  const include = await createInclude();
  const match = await db.Match.findByPk(id, {
    include,
  });
  if (!match) {
    throw "Match not found";
  }
  return match;
}

export async function createInclude() {
  return await [
    {
      model: db.Result,
      as: "results",
      include: [
        {
          model: db.Score,
          as: "scores",
        },
        {
          model: db.Player,
          as: "player",
        },
      ],
    },
  ];
}
