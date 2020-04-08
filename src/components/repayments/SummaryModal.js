import React, { useContext } from "react";
import RepaymentContext from "../../context/repayment/repaymentContext";
import { Modal, Table } from "antd";

const SummaryModal = () => {
  const repaymentContext = useContext(RepaymentContext);
  const { summariesToModify, clearProposedChanges, addToUploads } = repaymentContext;

  let dataSource = [];

  const columns = [
    {
      title: "Summary ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Season ID",
      dataIndex: "seasonId",
      key: "seasonId",
    },
    {
      title: "Total Credit",
      dataIndex: "credit",
      key: "credit",
    },
    {
      title: "Total Repaid",
      dataIndex: "repaid",
      key: "repaid",
    },
    {
      title: "Amount To Add",
      dataIndex: "toAdd",
      key: "toAdd",
    },
  ];

  if (summariesToModify !== null) {
    dataSource = summariesToModify.summariesToUpdate.map((t) => {
      return {
        key: t.summary.id,
        id: t.summary.id,
        seasonId: t.summary.seasonId,
        credit: t.summary.totalCredit,
        repaid: t.summary.totalRepaid,
        toAdd: t.amountToAdd,
      };
    });
  }

  const addToRepaymentUploads = () => {
    if (summariesToModify !== null) {
      addToUploads(summariesToModify.repaymentUpload)
    }
  }

  return (
    <Modal
      title="Proposed Changes"
      centered
      visible={summariesToModify !== null}
      onOk={() => addToRepaymentUploads()}
      onCancel={() => clearProposedChanges()}
    >
      {summariesToModify !== null && (
        <>
          <div className="changes-header">
            <p><span className="label">Total Amount:</span> {summariesToModify.repaymentUpload.amount}</p>
            <p><span className="label">Customer ID: </span>{summariesToModify.repaymentUpload.customerId}</p>
            {summariesToModify.repaymentUpload.seasonId && <p><span className="label">Season ID: </span>{summariesToModify.repaymentUpload.seasonId}</p>}
          </div>
          <div>
            <p className="label">Customer Summaries to Update: </p>
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </>
      )}
    </Modal>
  );
};

export default SummaryModal;
