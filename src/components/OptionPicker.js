import React from "react";
import {
  Container,
  Header,
  Dropdown,
  Button,
  Divider
} from "semantic-ui-react";
import "./OptionPicker.css";

const genderOptions = [
  {
    text: "Male",
    value: "male"
  },
  {
    text: "Female",
    value: "female"
  }
];

const OptionPicker = props => (
  <Container textAlign="left">
    <Header as="h4" content="Pick a gender" />
    <Dropdown
      onChange={props.valueChange}
      options={genderOptions}
      value={props.gender}
      fluid
      selection
    />
    <Button
      onClick={props.handleClick}
      color="blue"
      fluid
      className="option-picker__button"
    >
      Generate new identity
    </Button>
    <Divider className="option-picker__divider" />
  </Container>
);

export default OptionPicker;
