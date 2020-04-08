import React, { useReducer } from "react";
import axios from "axios";
import CustomerContext from './customerContext';
import customerReducer from './customerReducer';
import { GET_CUSTOMERS, FIND_CUSTOMER, CUSTOMER_ERROR, SET_LOADING } from "../types";

const CustomerState = props => {
  const initialState = {
    customers: null,
    fetchedCustomers: null,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(customerReducer, initialState);

  const getAllCustomers = async () => {
    setLoading();
    try {
      const res = await axios.get('/api/v1/customers/');
      dispatch({
        type: GET_CUSTOMERS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CUSTOMER_ERROR,
        payload: err.response.msg
      });
    }
  }

  const findCustomer = async value => {
    setLoading();
    try {
      const res = await axios.get(`/api/v1/customers/?q=${value}`);
      dispatch({
        type: FIND_CUSTOMER,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CUSTOMER_ERROR,
        payload: err.response.msg
      });
    }
  }

  // Set Loading
  const setLoading = () => dispatch({type: SET_LOADING});

  return (
    <CustomerContext.Provider
      value={{
        customers: state.customers,
        fetchedCustomers: state.fetchedCustomers,
        error: state.error,
        findCustomer,
        getAllCustomers
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
}

export default CustomerState


