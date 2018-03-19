import React, { Component } from "react";

class Result extends Component {
  render() {
    var percent = this.props.score / this.props.questions.length * 100;
    if (percent > 80) {
      var message = "Awesome Job";
    } else if (percent < 80 && percent > 60) {
      message = "You Did Ok";
    } else {
      message = "You did Horrible";
    }

    return (
      <div className="well">
        <h4>
          You got {this.props.score} out of {this.props.questions.length}{" "}
          Correct{" "}
        </h4>
        <h1>
          {percent}% - {message}{" "}
        </h1>
        <hr />
        <a href="./App">Take Again</a>
      </div>
    );
  }
}

export default Result;
