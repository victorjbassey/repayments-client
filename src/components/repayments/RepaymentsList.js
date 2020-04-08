import React, { useContext } from 'react';
import { Table, Divider } from 'antd';
import RepaymentContext from '../../context/repayment/repaymentContext';

const RepaymentsList = () => {
  const repaymentContext = useContext(RepaymentContext);
  const { currentlyMadeRepayments } = repaymentContext;

  let data = [];
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

  if (currentlyMadeRepayments !== null) {
    data = currentlyMadeRepayments.map(data => {
      const {adjustmentRepayments, originalRepayment } = data;
      return {
        key: originalRepayment.repaymentId,
        amount: originalRepayment.amount,
        customerId: originalRepayment.customerId,
        seasonId: originalRepayment.seasonId,
        children: adjustmentRepayments === null ? null : adjustmentRepayments.map(repayment => ({
          key: repayment.repaymentId,
        amount: repayment.amount,
        customerId: repayment.customerId,
        seasonId: repayment.seasonId
        }))
      }
    })
  }




  return (
    currentlyMadeRepayments !== null && (<div style={{marginTop: '3rem'}}>
      <Divider orientation="left">List of Repayments made</Divider>
      <Table columns={columns} dataSource={data} />
    </div>)
  )
}

export default RepaymentsList
