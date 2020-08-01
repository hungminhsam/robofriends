import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("Snapshot test for <Card />", () => {
  expect(shallow(<Card />).debug()).toMatchSnapshot();
});
