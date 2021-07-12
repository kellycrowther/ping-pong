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
              {result.player.name}
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
            <Col key={result.id} span={24}>
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
            return result.scores.map((score, index) => (
              <>
                <Col
                  key={score.id}
                  span={
                    24 % result.scores.length === 0
                      ? 24 / result.scores.length
                      : 4
                  }
                >
                  {score.points}
                </Col>
                {index === 4 ? <Col span={2}></Col> : null}
              </>
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
  return (
    <>
      <Row justify="center">
        <Col xs={24} style={{ textAlign: "center" }}>
          <Title>Results</Title>
          <p>*Begin recording results by clicking the Record Results button</p>
          <SaveResults
            listPlayers={listPlayers}
            players={players}
            createMatch={createMatch}
          />
          <Table dataSource={matches} columns={columns} rowKey="id" />
        </Col>
      </Row>
    </>
  );
};
