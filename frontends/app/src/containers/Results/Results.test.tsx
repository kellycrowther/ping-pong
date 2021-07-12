import { render, screen } from "@testing-library/react";
import { Results } from "./Results";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

describe("Results", () => {
  test("renders save results button", () => {
    const listPlayers = () => {};
    const players = [];
    const matches = [];
    const createMatch = () => {};
    render(
      <Results
        listPlayers={listPlayers}
        createMatch={createMatch}
        players={players}
        matches={matches}
      />
    );
    const linkElement = screen.getByTestId("save-results-btn");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders results table", () => {
    const listPlayers = () => {};
    const players = [];
    const matches = [];
    const createMatch = () => {};
    render(
      <Results
        listPlayers={listPlayers}
        createMatch={createMatch}
        players={players}
        matches={matches}
      />
    );
    const resultsTable = screen.getByTestId("results-table");
    expect(resultsTable).toBeInTheDocument();
  });
});
