import { shallow } from "enzyme";
import React from "react";
import Scrollable from "./Scrollable";

describe("<Scrollable />", () => {
  it("Snapshot Test for Scrollable", () => {
    expect(shallow(<Scrollable />).debug()).toMatchSnapshot();
  });

  it("render children when passed in", () => {
    const wrapper = shallow(
      <Scrollable>
        <div className="unique" />
      </Scrollable>
    );

    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });
});
