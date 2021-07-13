import { create, update, getAll, getById, _delete } from "./match.controller";
const matchService = require("../services/match.service");

jest.mock("../services/match.service.ts", () => ({
  create: () => Promise.resolve(),
  update: () => Promise.resolve(),
  getAll: () => Promise.resolve(),
  getById: () => Promise.resolve(),
  _delete: () => Promise.resolve(),
}));

describe("Match Controller", () => {
  it("should use the matchService to create a match", async () => {
    const msCreateSpy = jest.spyOn(matchService, "create");

    const req = {};
    const res = {
      json: jest.fn(),
    };
    const next = {};
    create(req, res, next);
    expect(msCreateSpy).toHaveBeenCalled();
  });

  it("should use the matchService to update a match", async () => {
    const spy = jest.spyOn(matchService, "update");

    const req = {
      params: {
        id: "123",
      },
    };
    const res = {
      json: jest.fn(),
    };
    const next = {};
    update(req, res, next);
    expect(spy).toHaveBeenCalled();
  });

  it("should use the matchService to delete a match", async () => {
    const spy = jest.spyOn(matchService, "getAll");

    const req = {};
    const res = {
      json: jest.fn(),
    };
    const next = {};
    getAll(req, res, next);
    expect(spy).toHaveBeenCalled();
  });

  it("should use the matchService to get all matches", async () => {
    const spy = jest.spyOn(matchService, "_delete");

    const req = {
      params: {
        id: "123",
      },
    };
    const res = {
      json: jest.fn(),
    };
    const next = {};
    _delete(req, res, next);
    expect(spy).toHaveBeenCalled();
  });

  it("should use the matchService to get a match by id", async () => {
    const spy = jest.spyOn(matchService, "getById");

    const req = {
      params: {
        id: "123",
      },
    };
    const res = {
      json: jest.fn(),
    };
    const next = {};
    getById(req, res, next);
    expect(spy).toHaveBeenCalled();
  });
});
