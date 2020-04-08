import {
  SEASON_ERROR,
  GET_SEASONS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_SEASONS:
      return {
        ...state,
        seasons: action.payload,
      };

    case SEASON_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
