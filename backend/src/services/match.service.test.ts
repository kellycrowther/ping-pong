import { getAll, getById, create, update, _delete } from "./match.service";
import { db } from "../db/index";

jest.mock("../db/index", () => ({
  db: {
    Match: {
      findAll: () => Promise.resolve(),
      findByPk: () =>
        Promise.resolve({
          save: () => Promise.resolve(),
          get: () => Promise.resolve(),
          destroy: () => Promise.resolve(),
        }),
      create: () => Promise.resolve(),
      update: () => Promise.resolve(),
      delete: () => Promise.resolve(),
    },
    Result: {},
    Score: {},
    Player: {},
  },
}));

jest.mock("./result.service.ts", () => ({
  createResult: jest.fn().mockImplementation(() => Promise.resolve()),
}));

jest.mock("./score.service.ts", () => ({
  createScore: jest.fn().mockImplementation(() => Promise.resolve()),
}));

describe("Match Service", () => {
  it("should use the database model to find all matches", async () => {
    const spy = jest.spyOn(db.Match, "findAll");

    await getAll();
    expect(spy).toHaveBeenCalled();
  });

  it("should use the database model to get a match", async () => {
    const spy = jest.spyOn(db.Match, "findByPk");

    const id = "1234";
    await getById(id);
    expect(spy).toHaveBeenCalled();
  });

  it("should use the database model to update a match", async () => {
    const saveSpy = jest.fn();
    const getSpy = jest.fn();
    const spy = jest.spyOn(db.Match, "findByPk").mockImplementation(() =>
      Promise.resolve({
        save: saveSpy,
        get: getSpy,
      } as any)
    );

    const id = "1234";
    const params = {};
    await update(id, params);
    expect(spy).toHaveBeenCalled();
    expect(saveSpy).toHaveBeenCalled();
    expect(getSpy).toHaveBeenCalled();
  });

  it("should use the database model to delete a match", async () => {
    const saveSpy = jest.fn();
    const getSpy = jest.fn();
    const destroySpy = jest.fn();
    const spy = jest.spyOn(db.Match, "findByPk").mockImplementation(() =>
      Promise.resolve({
        save: saveSpy,
        get: getSpy,
        destroy: destroySpy,
      } as any)
    );

    const id = "1234";
    const params = {};
    await _delete(id);
    expect(spy).toHaveBeenCalled();
    expect(destroySpy).toHaveBeenCalled();
  });

  it("should use the database model to create a match", async () => {
    const getSpy = jest.fn();
    const spy = jest.spyOn(db.Match, "create").mockImplementation(() =>
      Promise.resolve({
        get: getSpy,
      } as any)
    );

    const params = {};
    await create(params);
    expect(spy).toHaveBeenCalled();
    expect(getSpy).toHaveBeenCalled();
  });
});
