import {
  GET_CUSTOMERS,
  FIND_CUSTOMER,
  CUSTOMER_ERROR,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case FIND_CUSTOMER:
      return {
        ...state,
        fetchedCustomers: action.payload,
        loading: false
      }
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        loading: false
      }
    case CUSTOMER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state;
  }
}