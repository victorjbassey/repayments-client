import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  CloudUploadOutlined,
  TeamOutlined,
  HourglassOutlined,
} from "@ant-design/icons";
import RepaymentUploadForm from "../repayments/RepaymentUploadForm";
import RepaymentUploadList from '../repayments/RepaymentUploadList';
import ProposedChangesModal from '../repayments/SummaryModal';
import RepaymentsList from '../repayments/RepaymentsList';

import Statistics from "../statistics/Statistics";

const { Sider, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout>
      <Sider className="sider" collapsible breakpoint={"md"}>
        <Menu
          className="menu"
          theme="light"
          mode="inline"
          defaultSelectedKeys={["Dashboard"]}
        >
          <Menu.Item key="Dashboard">
            <DashboardOutlined />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="Requests">
            <CloudUploadOutlined />
            <span>Repayments</span>
          </Menu.Item>
          <Menu.Item key="Departments">
            <TeamOutlined />
            <span>Customers</span>
          </Menu.Item>
          <Menu.Item key="Settings">
            <HourglassOutlined />
            <span>Seasons</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content className="content">
        <Statistics />

        <div className="repayment-area">
          <h1>Repayments Panel</h1>
          <div className="repayment-upload">
            <RepaymentUploadForm />
            <RepaymentUploadList />
          </div>
          <RepaymentsList />
        </div>
        <ProposedChangesModal />
      </Content>
    </Layout>
  );
};

export default Dashboard;
