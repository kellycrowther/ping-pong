import { Typography, Row, Col, Table } from "antd";
import { SaveResults } from "./SaveResults";

const { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "40%",
    render: (text, row, index) => {
      const title = () => (
        <Row>
          {row.results.map((result, index) => (
            <Col key={result.id} span={24}>
              {result.name} - {result.id.slice(10)}
            </Col>
          ))}
        </Row>
      );
      return {
        children: row.results ? title() : null,
      };
    },
  },
  {
    title: "Games Won",
    dataIndex: "games-won",
    key: "games-won",
    width: "30%",
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
        children: row.results ? scores() : null,
      };
    },
  },
  {
    title: "Game Scores",
    dataIndex: "scores",
    key: "scores",
    width: "30%",
    render: (text, row, index) => {
      const gamesResults = () => (
        <Row>
          {/* Relying on order needs to be re-thought and it probably starts with the data model
              Consider creating a gameId client side to pair the games when displaying
          */}
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
        children: row.results ? gamesResults() : null,
      };
    },
  },
];

export const Results = ({ listPlayers, players, matches, createMatch }) => {
  console.info("MATCHES: ", matches);
  return (
    <>
      <Row justify="center">
        <Col xs={24} style={{ textAlign: "center" }}>
          <Title>Results</Title>
          <SaveResults
            listPlayers={listPlayers}
            players={players}
            createMatch={createMatch}
          />
          <Table dataSource={matches} columns={columns} rowKey="id" />;
        </Col>
      </Row>
    </>
  );
};
