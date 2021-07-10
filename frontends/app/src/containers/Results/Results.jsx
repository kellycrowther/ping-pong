import { Typography, Row, Col, Table } from "antd";
import { SaveResults } from "./SaveResults";

const { Title } = Typography;

const matches = [
  {
    id: "match-1",
    results: [
      {
        player: "1",
        gamesWon: 3,
        scores: [
          {
            gameId: "8",
            points: 3,
            order: 2,
          },
          {
            gameId: "9",
            points: 2,
            order: 1,
          },
        ],
      },
      {
        player: "2",
        gamesWon: 2,
        scores: [
          {
            gameId: "9",
            points: 9,
            order: 1,
          },
          {
            gameId: "8",
            points: 8,
            order: 2,
          },
        ],
      },
    ],
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, row, index) => {
      const title = () => (
        <Row>
          {row.results.map((result, index) => (
            <Col key={result.player} span={24}>
              {result.player}
            </Col>
          ))}
        </Row>
      );
      return {
        children: title(),
      };
    },
  },
  {
    title: "Games Won",
    dataIndex: "games-won",
    key: "games-won",
    render: (text, row, index) => {
      const scores = () => (
        <Row>
          {row.results.map((result, index) => (
            <Col key={result.gamesWon} span={24}>
              {result.gamesWon}
            </Col>
          ))}
        </Row>
      );
      return {
        children: scores(),
      };
    },
  },
  {
    title: "Game Scores",
    dataIndex: "scores",
    key: "scores",
    render: (text, row, index) => {
      const gamesResults = () => (
        <Row>
          {/* This needs to be re-thought and it probably starts with the data model */}
          {row.results.map((result, index) => {
            result.scores.sort((a, b) => a.order - b.order);
            return result.scores.map((score) => (
              <Col key={score.points} span={24 / result.scores.length}>
                {score.points}
              </Col>
            ));
          })}
        </Row>
      );
      return {
        children: gamesResults(),
      };
    },
  },
];

export const Results = ({ listPlayers, players }) => {
  return (
    <>
      <Row justify="center">
        <Col xs={24} style={{ textAlign: "center" }}>
          <Title>Results</Title>
          <SaveResults listPlayers={listPlayers} players={players} />
          <Table dataSource={matches} columns={columns} rowKey="id" />;
        </Col>
      </Row>
    </>
  );
};
