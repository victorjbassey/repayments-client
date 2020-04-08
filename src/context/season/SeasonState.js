import React, { useReducer } from "react";
import axios from "axios";
import SeasonContext from "./seasonContext";
import seasonReducer from "./seasonReducer";
import {
  SEASON_ERROR,
  GET_SEASONS,
} from "../types";

const SeasonState = (props) => {
  const initialState = {
    seasons: null,
    error: null,
  };

  const [state, dispatch] = useReducer(seasonReducer, initialState);

  const getSeasons = async () => {
    try {
      const res = await axios.get("/api/v1/seasons");
      dispatch({
        type: GET_SEASONS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: SEASON_ERROR,
        payload: err.response.msg,
      });
    }
  };


  return (
    <SeasonContext.Provider
      value={{
        seasons: state.seasons,
        error: state.error,
        getSeasons
      }}
    >
      {props.children}
    </SeasonContext.Provider>
  );
};

export default SeasonState;
