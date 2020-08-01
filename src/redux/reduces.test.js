import * as reducers from "./reducers";

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

describe("searchTextReducer", () => {
  it("expect return initial default value", () => {
    expect(reducers.searchTextReducer(undefined, {})).toEqual(
      initialState.searchText
    );
  });

  it("expect return action.payload", () => {
    const mockState = "some text";
    const mockAction = { type: CHANGE_SEARCH_TEXT, payload: "search me" };

    expect(reducers.searchTextReducer(mockState, mockAction)).toEqual(
      "search me"
    );
  });
});

describe("robotsReducer", () => {
  it("expect return initial default value", () => {
    const mockState = initialState.robots;
    expect(reducers.robotsReducer(undefined, {})).toEqual(initialState.robots);
  });

  it("expect return PENDING state", () => {
    const mockState = initialState.robots;
    const action = { type: FETCH_ROBOTS_PENDING };
    const pendingState = { ...initialState.robots, isPending: true };
    expect(reducers.robotsReducer(mockState, action)).toEqual(pendingState);
  });

  it("expect return FAILED state", () => {
    const mockState = initialState.robots;
    const action = {
      type: FETCH_ROBOTS_FAILED,
      payload: { message: "fetch robots failed" },
    };
    const failedState = {
      ...initialState.robots,
      error: { message: "fetch robots failed" },
    };
    expect(reducers.robotsReducer(mockState, action)).toEqual(failedState);
  });

  it("expect return SUCCESS state", () => {
    const mockState = initialState.robots;
    const action = {
      type: FETCH_ROBOTS_SUCCESS,
      payload: [
        {
          id: 1,
          name: "Jane Doe",
          email: "jane.doe@gmail.com",
        },
        {
          id: 2,
          name: "Jone Doe",
          email: "jone.doe@gmail.com",
        },
        {
          id: 3,
          name: "Joe Bloke",
          email: "joe.block@gmail.com",
        },
      ],
    };
    const successState = {
      ...initialState.robots,
      data: [
        {
          id: 1,
          name: "Jane Doe",
          email: "jane.doe@gmail.com",
        },
        {
          id: 2,
          name: "Jone Doe",
          email: "jone.doe@gmail.com",
        },
        {
          id: 3,
          name: "Joe Bloke",
          email: "joe.block@gmail.com",
        },
      ],
    };
    expect(reducers.robotsReducer(mockState, action)).toEqual(successState);
  });
});
