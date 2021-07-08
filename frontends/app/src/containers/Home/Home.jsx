import { useState } from "react";
import { Typography, Row, Col, Modal, Button, Input, Form } from "antd";

const { Title } = Typography;

export const Home = ({ createPlayer }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");

  const handleOk = () => {
    createPlayer({ name });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setName("");
    setIsModalVisible(false);
  };

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
        <Col xs={24} style={{ textAlign: "center" }}>
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
    </>
  );
};
