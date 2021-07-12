import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
  beforeAll(() => {
    global.matchMedia =
      global.matchMedia ||
      function () {
        return {
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      };
  });
  test("renders Create Player button", () => {
    const createPlayer = () => {};
    const rankedPlayers = [];
    render(<Home createPlayer={createPlayer} rankedPlayers={rankedPlayers} />);
    const createPlayerBtn = screen.getByText(/Create Player/i);
    expect(createPlayerBtn).toBeInTheDocument();
  });

  test("renders player rank table", () => {
    const createPlayer = () => {};
    const rankedPlayers = [];
    render(<Home createPlayer={createPlayer} rankedPlayers={rankedPlayers} />);
    const item = screen.getByTestId("player-rank-table");
    expect(item).toBeInTheDocument();
  });
});
