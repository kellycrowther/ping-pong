import { useState } from "react";
import { Row, Col, Modal, Button, Input, Form, Select } from "antd";

const { Option } = Select;

export const SaveResults = ({ createPlayer, players }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.info("PLAYERS: ", players);
  console.info("PLAYER ONE: ", playerOne);

  return (
    <>
      <Row>
        <Col xs={24} style={{ textAlign: "left", padding: "1rem 0" }}>
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            Record Results
          </Button>
          <Modal
            title="Save Results"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            destroyOnClose={true}
            preserve={false}
            width={750}
          >
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: false }}
              layout="vertical"
            >
              {/* Refactor to DRY */}
              <Row gutter={8}>
                <Col span={8}>
                  <Form.Item label="Select Player 1">
                    <Select
                      placeholder="Select Player 1"
                      style={{ width: 180 }}
                      onChange={(val) => setPlayerOne(val)}
                    >
                      {players.map((player) => (
                        <Option value={player.id} key={player.id}>
                          {player.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    label="Game 1 Score"
                    name="game-1-score"
                    labelCol={{ span: 12 }}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    label="Game 2 Score"
                    name="game-2-score"
                    labelCol={{ span: 12 }}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    label="Game 3 Score"
                    name="game-3-score"
                    labelCol={{ span: 12 }}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={8}>
                <Col span={8}>
                  <Form.Item label="Select Player 2">
                    <Select
                      placeholder="Select Player 2"
                      style={{ width: 180 }}
                      onChange={(val) => setPlayerTwo(val)}
                    >
                      {players.map((player) => (
                        <Option value={player.id} key={player.id}>
                          {player.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    label="Game 1 Score"
                    name="game-1-score"
                    labelCol={{ span: 12 }}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    label="Game 2 Score"
                    name="game-2-score"
                    labelCol={{ span: 12 }}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    label="Game 3 Score"
                    name="game-3-score"
                    labelCol={{ span: 12 }}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        </Col>
      </Row>
    </>
  );
};
