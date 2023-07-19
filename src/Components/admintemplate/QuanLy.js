import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { dangXuat } from "../../redux/reduxSlice";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const QuanLy = () => {
  const navigate = useNavigate();
  const duLieu = useSelector((state) => state.duLieu);

  useEffect(() => {
    if (duLieu.isLogin === false || duLieu.nguoiDung === null) {
      navigate("/");
    }
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const dispatch = useDispatch();
  //đăng xuất
  const handleShowDangXuat = () => {
    localStorage.removeItem("nguoiDung");
    dispatch(dangXuat());
    navigate("/");
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Thêm nhân viên",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
        <div id="info">
          <p></p>
          <button className="myButton" onClick={handleShowDangXuat}>
            Đăng xuất
          </button>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default QuanLy;
