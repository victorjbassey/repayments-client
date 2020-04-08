import {
  GET_CUSTOMER_SUMMARY,
  ADD_TO_UPLOADS,
  GET_REPAYMENTS,
  REPAYMENT_ERROR,
  REPAY_DEBTS,
  CLEAR_PROPOSED_CHANGES,
  SET_LOADING,
  CLEAR_PANEL
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CUSTOMER_SUMMARY:
      return {
        ...state,
        summariesToModify: action.payload,
        loading: false
      };
    case CLEAR_PROPOSED_CHANGES:
      return {
        ...state,
        summariesToModify: null,
      };
    case ADD_TO_UPLOADS:
      return {
        ...state,
        repaymentUploads: [action.payload, ...state.repaymentUploads],
      };
    case GET_REPAYMENTS:
      return {
        ...state,
        allRepayments: action.payload,
      };
    case REPAY_DEBTS:
      return {
        ...state,
        currentlyMadeRepayments: action.payload,
      };
    case REPAYMENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
      case SET_LOADING:
        return {
          ...state,
          loading: true,
        };
        case CLEAR_PANEL:
        return {
          ...state,
          repaymentUploads: [],
          currentlyMadeRepayments: null
        };
    default:
      return state;
  }
};
