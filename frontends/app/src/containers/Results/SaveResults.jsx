import { useState } from "react";
import { Row, Col, Modal, Button, Input, Form, Select } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

export const SaveResults = ({ players }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Set order property using index
        Object.keys(values).forEach((key) => {
          values[key].scores = values[key].scores.map((score, index) => ({
            ...score,
            points: Number(score.points),
            order: index,
          }));
          // Set games won if points equals 11
          values[key]["gamesWon"] = values[key].scores.reduce((acc, cur) => {
            if (cur.points === 11) {
              acc++;
            }
            return acc;
          }, 0);
        });

        console.info("values: ", values);
        // form.resetFields();
        // onCreate(values);
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
              layout="vertical"
              form={form}
            >
              {/* Refactor to DRY */}
              <Row gutter={8}>
                <Col span={6}>
                  <Form.Item
                    label="Select Player 1"
                    name={["firstResult", "playerId"]}
                  >
                    <Select
                      placeholder="Select Player 1"
                      style={{ width: 150 }}
                    >
                      {players.map((player) => (
                        <Option value={player.id} key={player.id}>
                          {player.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Form.List name={["firstResult", "scores"]}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(
                        ({ key, name, fieldKey, ...restField }, index) => (
                          <Col span={3} key={key}>
                            <Form.Item
                              {...restField}
                              name={[name, "points"]}
                              fieldKey={[fieldKey, "points"]}
                              label={`Game ${index + 1} Score`}
                              labelCol={24}
                            >
                              <Input placeholder="Points" type="number" />
                            </Form.Item>
                            <Form.Item {...restField} hidden>
                              <Input value={index} type="number" />
                            </Form.Item>
                          </Col>
                        )
                      )}
                      <Col
                        span={3}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <Button
                            shape="circle"
                            size="small"
                            onClick={() => remove(fields.length - 1)}
                            icon={<MinusOutlined />}
                          />
                          <Button
                            shape="circle"
                            size="small"
                            disabled={fields.length === 5}
                            onClick={() => add()}
                            icon={<PlusOutlined />}
                          />
                        </div>
                      </Col>
                    </>
                  )}
                </Form.List>
              </Row>

              <Row gutter={8}>
                <Col span={6}>
                  <Form.Item
                    label="Select Player 2"
                    name={["secondResult", "playerId"]}
                  >
                    <Select
                      placeholder="Select Player 2"
                      style={{ width: 150 }}
                    >
                      {players.map((player) => (
                        <Option value={player.id} key={player.id}>
                          {player.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Form.List name={["secondResult", "scores"]}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(
                        ({ key, name, fieldKey, ...restField }, index) => (
                          <Col span={3} key={key}>
                            <Form.Item
                              {...restField}
                              name={[name, "points"]}
                              fieldKey={[fieldKey, "points"]}
                              label={`Game ${index + 1} Score`}
                              labelCol={24}
                            >
                              <Input placeholder="Points" type="number" />
                            </Form.Item>
                          </Col>
                        )
                      )}
                      <Col
                        span={3}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <Button
                            shape="circle"
                            size="small"
                            onClick={() => remove(fields.length - 1)}
                            icon={<MinusOutlined />}
                          />
                          <Button
                            shape="circle"
                            size="small"
                            disabled={fields.length === 5}
                            onClick={() => add()}
                            icon={<PlusOutlined />}
                          />
                        </div>
                      </Col>
                    </>
                  )}
                </Form.List>
              </Row>
            </Form>
          </Modal>
        </Col>
      </Row>
    </>
  );
};
