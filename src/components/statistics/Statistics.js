import React from "react";
import { Statistic, Card, Row, Col } from "antd";

const Statistics = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Number of Customers"
              value={5000}
              valueStyle={{ color: "#3c917d" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Repayment Uploads"
              value={10000}
              valueStyle={{ color: "#3c917d" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Number of Repayments made"
              value={20000}
              valueStyle={{ color: "#3c917d" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
