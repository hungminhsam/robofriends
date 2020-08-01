import { shallow } from "enzyme";
import React from "react";
import CountButton from "./CountButton";

describe("<CountButton />", () => {
  it("expect to render CountButton Component", () => {
    expect(shallow(<CountButton />).debug()).toMatchSnapshot();
  });

  it("correctly increments the counter", () => {
    const wrapper = shallow(<CountButton />);
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.text()).toEqual("Click count : 2 ");
  });
});
