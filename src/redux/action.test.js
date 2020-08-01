import * as actions from "./actions";

import {
  CHANGE_SEARCH_TEXT,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED,
} from "./action-types";

describe("changeSearchText Action", () => {
  it("should return a CHANGE_SEARCH_TEXT action", () => {
    expect(actions.changeSearchText("search text")).toEqual({
      type: CHANGE_SEARCH_TEXT,
      payload: "search text",
    });
  });
});

import configureMockStore from "redux-mock-store";
import reduxthunk from "redux-thunk";

const middleware = [reduxthunk];
const mockStore = configureMockStore(middleware);

describe("fetchRobots Action", () => {
  it("should first dispatch a FETCH_ROBOTS_PENDING action", () => {
    jest.setTimeout(100000);
    const store = mockStore({});
    expect.assertions(2);
    return store.dispatch(actions.fetchRobots()).then(() => {
      const actions = store.getActions();
      console.log(actions);
      expect(actions[0]).toEqual({ type: FETCH_ROBOTS_PENDING });
      expect(actions[1].type).toEqual(FETCH_ROBOTS_SUCCESS);
    });
  });
});
