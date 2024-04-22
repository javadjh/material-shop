import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Typography, theme } from "antd";
import { FC, useState } from "react";
import { CenterStyled, SpaceStyled } from "../global-style/global.s";
import { LogoContainer } from "./AdminLayout.s";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const AdminLayout: FC<{ children: any }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const clickListener: any = (item: any) => {
    navigate(item.key);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <LogoContainer>LOGO place</LogoContainer>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={clickListener}
          items={[
            {
              key: "product",
              icon: <UploadOutlined />,
              label: "محصولات",
            },
            {
              key: "user",
              icon: <UserOutlined />,
              label: "کاربران",
            },
            {
              key: "category",
              icon: <UserOutlined />,
              label: "دسته بندی",
            },
            {
              key: "seller",
              icon: <UserOutlined />,
              label: "فروشندگان",
            },
            {
              key: "job",
              icon: <UploadOutlined />,
              label: "فرصت های شغلی",
              children: [
                {
                  key: "jobinfo",
                  icon: <UserOutlined />,
                  label: "ایجاد فرصت شغلی",
                },
                {
                  key: "jobs",
                  icon: <UserOutlined />,
                  label: "درخواست ها",
                },
              ],
            },
            {
              key: "brand",
              icon: <UploadOutlined />,
              label: "برندها",
            },
            {
              key: "report",
              icon: <UploadOutlined />,
              label: "گزارش ها",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#FFFFFF" }}>
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
            background: "#FFFFFF",
            borderRadius: "green",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
