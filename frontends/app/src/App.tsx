import "./App.css";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { RenderRoutes } from "./routes/routes";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              Home
              <Link to="/"></Link>
            </Menu.Item>
            <Menu.Item key="2">
              Results
              <Link to="/results"></Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <RenderRoutes />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Kelly Crowther</Footer>
      </Layout>
    </div>
  );
}

export default App;
