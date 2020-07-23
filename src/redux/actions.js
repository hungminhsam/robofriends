import {
  CHANGE_SEARCH_TEXT,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED,
} from "./action-types";

export const changeSearchText = (text) => ({
  type: CHANGE_SEARCH_TEXT,
  payload: text,
});

export const fetchRobots = () => async (dispatch) => {
  dispatch({ type: FETCH_ROBOTS_PENDING });
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_ROBOTS_FAILED, payload: error });
  }
};
