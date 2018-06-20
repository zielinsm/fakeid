import React from "react";
import DisplayTable from "./DisplayTable";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

const mockData = [
  {
    row: "Name",
    value: "Name Surname"
  },
  {
    row: "Gender",
    value: "Female"
  },
  {
    row: "Age",
    value: "00"
  },
  {
    row: "Born on",
    value: "00/00/0000"
  },
  {
    row: "Region",
    value: "Region"
  },
  {
    row: "Phone",
    value: "(000) 000 0000"
  },
  {
    row: "Username",
    value: "Username"
  },
  {
    row: "Password",
    value: "Password"
  }
];

test("DisplayTable renders correct number of rows", () => {
  let tree = mount(<DisplayTable identity={mockData} />);
  expect(tree.find("tr")).toHaveLength(8);
});
