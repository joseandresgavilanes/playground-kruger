import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import AgeStats from "./AgeStats";
import "./AgeCalculator.scss";

class AgeCalculator extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      birthday: "1998-08-04",
      showStats: false,
    };
  }

  changeBirthday = () => {
    this.setState({ birthday: this.state.newDate, showStats: true });
    console.log(this.state);
  };
  render() {
    return (
      <div className="age">
        <h2 className="age__title">Age Calculator</h2>
        <Form inline className="age__form">
          <FormControl
            className="age__form-calendar"
            type="date"
            onChange={(event) => this.setState({ newDate: event.target.value })}
          />{" "}
          <Button
            onClick={() => this.changeBirthday()}
            className="age__form-btn"
          >
            Calculate
          </Button>
        </Form>
        {this.state.showStats ? (
          <div className="fade age-stats age__result">
            <AgeStats date={this.state.birthday} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default AgeCalculator;
