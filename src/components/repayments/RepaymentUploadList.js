import React, { useContext } from "react";
import RepaymentContext from "../../context/repayment/repaymentContext";
import { Button, Table } from "antd";

const RepaymentUploadList = () => {
  const repaymentContext = useContext(RepaymentContext);
  const { repaymentUploads, repayDebts } = repaymentContext;
  let dataSource = [];
  const columns = [
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Customer ID",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Season ID",
      dataIndex: "seasonId",
      key: "seasonId",
    },
  ];

  if (repaymentUploads.length > 0) {
    dataSource = repaymentUploads.map((upload, index) => {
      return {
        key: index,
        amount: upload.amount,
        customerId: upload.customerId,
        seasonId: upload.seasonId ? upload.seasonId : "-",
      };
    });
  }

  return (
    repaymentUploads.length > 0 && (
      <div>
        <div className="table-header">
          <p style={{ fontSize: "1rem" }}>
            List of Repayment Uploads to be made
          </p>
          <Button type="primary" onClick={() => repayDebts(repaymentUploads)}>
            Submit
          </Button>
        </div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    )
  );
};

export default RepaymentUploadList;
