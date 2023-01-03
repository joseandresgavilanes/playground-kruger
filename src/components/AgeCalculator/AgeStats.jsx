import React, { Component } from "react";
import "./AgeCalculator.scss";

class AgeStats extends Component {
  calculateAge = (date) => {
    const today = new Date().getTime();
    const birthday = new Date(date).getTime();
    const age_mili = Math.abs(today - birthday);

    let days = Math.floor(age_mili / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;

    return (
      <>
        <div className="age__stats-container__item">
          {years}
          <p className="age__stats-container__item-text">Years</p>
        </div>
        <div className="age__stats-container__item">
          {months}
          <p className="age__stats-container__item-text">Years</p>
        </div>
        <div className="age__stats-container__item">
          {days}
          <p className="age__stats-container__item-text">Years</p>
        </div>
      </>
    );
  };
  render() {
    return (
      <div className="age__stats">
        <h4 className="age__stats-container">
          {this.calculateAge(this.props.date)}
        </h4>
        <img
          src="https://github.com/nids98/Age-Calculator/blob/master/src/assets/party-popper.jpg?raw=true"
          alt="Yayyy"
          className="party-popper age__stats-img"
        />
      </div>
    );
  }
}

export default AgeStats;
