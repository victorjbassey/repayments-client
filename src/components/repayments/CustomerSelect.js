import React, { useState } from "react";
import { Select, Spin } from "antd";
import axios from 'axios'
import debounce from "lodash/debounce";

const { Option } = Select;

const CustomerSelect = (props) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);

  const selectValue = (key, value) => {
    props.form.setFieldsValue({
      customerId: value.value,
    });
  };

  const fetchUser = async (value) => {
    setFetching(true);
    const response = await axios.get(`/api/v1/customers/filter?value=${value}`);
    const data = response.data.data.map(customer => ({
      text: customer.customerName,
      value: customer.customerId
    }))
    setData(data);
    setFetching(false);

  };

  return (
    <Select
      showSearch
      showArrow={false}
      filterOption={false}
      placeholder="Select Customer"
      onSearch={debounce(fetchUser, 800)}
      onSelect={selectValue}
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {data.map((d) => (
        <Option key={d.value}>{d.text}</Option>
      ))}
    </Select>
  );
};

export default CustomerSelect;
