import { shallow } from "enzyme";
import React from "react";
import { CardList } from "./CardList";

describe("<CardList />", () => {
  it("expect to render CardList", () => {
    const mockProps = {
      searchText: "",
      robots: {
        isPending: false,
        error: null,
        data: [],
      },
    };
    expect(shallow(<CardList {...mockProps} />).debug()).toMatchSnapshot();
  });

  it("expect to render isPending", () => {
    const mockProps = {
      searchText: "",
      robots: {
        isPending: true,
        error: null,
        data: [],
      },
    };
    expect(shallow(<CardList {...mockProps} />).text()).toEqual("Loading...");
  });

  it("expect to rander error message", () => {
    const mockProps = {
      searchText: "",
      robots: {
        isPending: false,
        error: { message: "error message" },
        data: [],
      },
    };
    expect(shallow(<CardList {...mockProps} />).text()).toEqual(
      "error message"
    );
  });

  it("expect to render all robots correctly", () => {
    const mockProps = {
      searchText: "",
      robots: {
        isPending: false,
        error: null,
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
      },
    };
    expect(shallow(<CardList {...mockProps} />).find("Card").length).toEqual(3);
  });

  it("expect to filter correctly", () => {
    const mockProps = {
      searchText: "Jane",
      robots: {
        isPending: false,
        error: null,
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
      },
    };
    expect(shallow(<CardList {...mockProps} />).find("Card").length).toEqual(1);
  });
});
