import { useState } from "react";
import { Typography, Row, Col, Modal, Button, Input, Form, Table } from "antd";
import { useEffect } from "react";

const { Title } = Typography;

const columns = [
  {
    title: "Rank",
    dataIndex: "rank",
    key: "rank",
    width: "5%",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "15%",
  },
  {
    title: "Games Won",
    dataIndex: "totalGamesWon",
    key: "gamesWon",
    width: "15%",
  },
];

export const Home = ({ createPlayer, rankedPlayers }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");

  const handleOk = () => {
    createPlayer({ name });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setName("");
    setIsModalVisible(false);
  };

  useEffect(() => {
    const players = rankedPlayers.map((player, index) => ({
      ...player,
      rank: index + 1,
    }));
    setPlayers(players);
  }, [rankedPlayers]);

  return (
    <>
      <Row justify="center">
        <Col xs={24} style={{ textAlign: "center" }}>
          <Title>Ping Pong Results</Title>
          <Title level={3}>
            See a listing of players and their rankings below.
          </Title>
          <Title level={3}>
            Navigate to the results page to see match results.
          </Title>
        </Col>
      </Row>
      <Row>
        <Col xs={24} style={{ textAlign: "left", padding: "10px 0px" }}>
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            Create Player
          </Button>
          <Modal
            title="Create Player"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            destroyOnClose={true}
            preserve={false}
          >
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: false }}
            >
              <Form.Item
                label="Name"
                name="player-name"
                rules={[
                  { required: true, message: "Please input the player name!" },
                ]}
              >
                <Input onChange={(val) => setName(val.target.value)} />
              </Form.Item>
            </Form>
          </Modal>
        </Col>
      </Row>

      <>
        <Row justify="center">
          <Col xs={24} style={{ textAlign: "center" }}>
            <Table
              title={() => "Ranked Results"}
              dataSource={players}
              columns={columns}
              rowKey="rank"
              data-testid="player-rank-table"
            />
          </Col>
        </Row>
      </>
    </>
  );
};
