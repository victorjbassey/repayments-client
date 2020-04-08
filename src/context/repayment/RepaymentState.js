import React, { useReducer } from "react";
import axios from "axios";
import repaymentReducer from "./repaymentReducer";
import RepaymentContext from "./repaymentContext";
import {
  GET_CUSTOMER_SUMMARY,
  ADD_TO_UPLOADS,
  GET_REPAYMENTS,
  REPAYMENT_ERROR,
  REPAY_DEBTS,
  GET_TOTAL_REPAYMENT_UPLOADS,
  CLEAR_PROPOSED_CHANGES,
  SET_LOADING,
  CLEAR_PANEL
} from "../types";

const RepaymentState = (props) => {
  const initialState = {
    summariesToModify: null,
    repaymentUploads: [],
    currentlyMadeRepayments: null,
    allRepayments: null,
    totalRepaymentUploads: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(repaymentReducer, initialState);

  const getAllRepayments = async () => {
    try {
      const res = await axios.get("/api/v1/repayments");
      dispatch({
        type: GET_REPAYMENTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REPAYMENT_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  const repayDebts = async (uploads) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/repayments/repay", uploads, config);
      dispatch({
        type: REPAY_DEBTS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: REPAYMENT_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  const getTotalRepaymentUploads = async () => {
    try {
      const res = await axios.get("/api/v1/repayments/uploads");
      dispatch({
        type: GET_TOTAL_REPAYMENT_UPLOADS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REPAYMENT_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  const getSummariesToModify = async (customerId, seasonId, amount) => {
    setLoading();
    try {
      const res = await axios.get(
        `/api/v1/repayments//proposed-changes?customerId=${customerId}&amount=${amount}&seasonId=${seasonId}`
      );
      dispatch({
        type: GET_CUSTOMER_SUMMARY,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: REPAYMENT_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  const clearProposedChanges = () => {
    dispatch({
      type: CLEAR_PROPOSED_CHANGES,
    });
  };

  const addToUploads = (upload) => {
    dispatch({
      type: ADD_TO_UPLOADS,
      payload: upload,
    });
    clearProposedChanges();
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  const clearPanel = () => {
    dispatch({
      type: CLEAR_PANEL
    })
  }

  return (
    <RepaymentContext.Provider
      value={{
        repaymentUploads: state.repaymentUploads,
        summariesToModify: state.summariesToModify,
        currentlyMadeRepayments: state.currentlyMadeRepayments,
        allRepayments: state.allRepayments,
        totalRepaymentUploads: state.totalRepaymentUploads,
        loading: state.loading,
        error: state.error,
        repayDebts,
        getAllRepayments,
        addToUploads,
        getSummariesToModify,
        getTotalRepaymentUploads,
        clearProposedChanges,
        clearPanel
      }}
    >
      {props.children}
    </RepaymentContext.Provider>
  );
};

export default RepaymentState;
