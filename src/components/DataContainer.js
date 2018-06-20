import React, { Component } from "react";
import _ from "lodash";
import { Grid, Segment } from "semantic-ui-react";
import "./DataContainer.css";

import OptionPicker from "./OptionPicker";
import DisplayTable from "./DisplayTable";

class DataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "male",
      identity: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  handleClick() {
    this.fetchData();
  }

  valueChange = (e, { value }) => {
    this.setState({ gender: value });
  };

  fetchData() {
    fetch(`https://uinames.com/api/?gender=${this.state.gender}&ext`)
      .then(response => response.json())
      .then(data => [
        {
          row: "Name",
          value: `${data.name} ${data.surname}`
        },
        {
          row: "Gender",
          value: _.capitalize(data.gender)
        },
        {
          row: "Age",
          value: data.age
        },
        {
          row: "Born on",
          value: data.birthday.mdy
        },
        {
          row: "Region",
          value: data.region
        },
        {
          row: "Phone",
          value: data.phone
        },
        {
          row: "Username",
          value: data.email.replace(/@.*/, "")
        },
        {
          row: "Password",
          value: data.password
        }
      ])
      .then(data => this.setState({ identity: data }));
  }

  render() {
    return (
      <Grid centered className="data-container">
        <Segment className="data-container__wrapper">
          <OptionPicker
            gender={this.state.gender}
            handleClick={this.handleClick.bind(this)}
            valueChange={this.valueChange.bind(this)}
          />
          <DisplayTable identity={this.state.identity} />
        </Segment>
      </Grid>
    );
  }
}

export default DataContainer;
