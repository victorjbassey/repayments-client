import React, { useContext, useEffect } from "react";
import { Form, InputNumber, Button, Select } from "antd";
import CustomerSelect from "./CustomerSelect";
import SeasonContext from "../../context/season/seasonContext";
import RepaymentContext from "../../context/repayment/repaymentContext";

const { Option } = Select;

const RepaymentUploadForm = () => {
  const seasonContext = useContext(SeasonContext);
  const repaymentContext = useContext(RepaymentContext);

  const { seasons, getSeasons } = seasonContext;
  const { getSummariesToModify, loading, clearPanel } = repaymentContext;

  useEffect(() => {
    getSeasons();
    // eslint-disable-next-line
  }, []);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    clearPanel()
    getSummariesToModify(values.customerId, values.seasonId, values.amount);
    form.resetFields();
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="repayment-upload-form"
      className="ant-advanced-search-form"
      onFinish={onFinish}
      initialValues={{
        seasonId: "0",
      }}
    >
      <Form.Item
        name="amount"
        label="Amount"
        rules={[
          {
            required: true,
            message: "Please enter amount",
          },
          {
            type: "number",
            min: 1,
            message: "Amount should be greater than zero",
          },
        ]}
      >
        <InputNumber className="amount" placeholder="Enter amount" />
      </Form.Item>
      <Form.Item
        name="customerId"
        label="Customer"
        rules={[
          {
            required: true,
            message: "Please select customer",
          },
        ]}
      >
        <CustomerSelect form={form} />
      </Form.Item>
      <Form.Item name="seasonId" label="Season">
        <Select>
          <Option key="0" value="0">Select Season</Option>
          {seasons !== null &&
            seasons.map((season) => (
              <Option key={season.seasonId} value={season.seasonId}>{season.seasonName}</Option>
            ))}
          ) }
        </Select>
      </Form.Item>

      <div className="repay-cta">
        <Button type="primary" htmlType="submit" loading={loading}>
          Check
        </Button>
        <Button
          style={{ marginLeft: "8px" }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Clear
        </Button>
      </div>
    </Form>
  );
};

export default RepaymentUploadForm;
