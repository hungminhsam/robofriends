import { shallow } from "enzyme";
import React from "react";
import { SearchBox } from "./SearchBox";

describe("<SearchBox />", () => {
  it("expect to render SearchBox", () => {
    const mockProps = {
      searchText: "",
      changeSearchText: jest.fn(),
    };
    expect(shallow(<SearchBox {...mockProps} />).debug()).toMatchSnapshot();
  });

  it("expect to render SearchBox with correct SearchText passed as props", () => {
    const mockProps = {
      searchText: "search text",
      changeSearchText: jest.fn(),
    };
    expect(
      shallow(<SearchBox {...mockProps} />)
        .find("input")
        .prop("value")
    ).toEqual("search text");
  });
});
