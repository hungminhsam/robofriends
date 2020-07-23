import { combineReducers } from "redux";

import {
  CHANGE_SEARCH_TEXT,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED,
} from "./action-types";

const initialState = {
  searchText: "",
  robots: {
    isPending: false,
    error: null,
    data: [],
  },
};

const searchTextReducer = (state = initialState.searchText, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return action.payload;
    default:
      return state;
  }
};

const robotsReducer = (state = initialState.robots, action) => {
  switch (action.type) {
    case FETCH_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case FETCH_ROBOTS_SUCCESS:
      return { ...state, isPending: false, data: action.payload };
    case FETCH_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  searchText: searchTextReducer,
  robots: robotsReducer,
});
