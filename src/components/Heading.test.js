import React from "react";
import Heading from "./Heading";
import renderer from "react-test-renderer";

test("Heading renders correctly", () => {
  const component = renderer.create(<Heading />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
