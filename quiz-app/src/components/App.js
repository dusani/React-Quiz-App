import React, { Component } from "react";
import QuestionList from "./Quiz/QuestionList";
import Scorebox from "./Quiz/Scorebox";
import Result from "./Quiz/Result";

class App extends Component {
  state = {
    questions: [
      {
        id: 1,
        text: "What is the world's longest river?",
        choices: [
          {
            id: "a",
            text: "Amazon"
          },
          {
            id: "b",
            text: "Nile"
          },
          {
            id: "c",
            text: "Niger"
          }
        ],
        correct: "a"
      },
      {
        id: 2,
        text: "What is the capital city of Spain?",
        choices: [
          {
            id: "a",
            text: "Madrid"
          },
          {
            id: "b",
            text: "Barcelona"
          },
          {
            id: "c",
            text: "Catalina"
          }
        ],
        correct: "a"
      },
      {
        id: 3,
        text: "Which chess piece can only move diagonally?",
        choices: [
          {
            id: "a",
            text: "Rook"
          },
          {
            id: "b",
            text: "Pawn"
          },
          {
            id: "c",
            text: "Bishop"
          }
        ],
        correct: "c"
      },
      {
        id: 4,
        text:
          "What colour jersey is worn by the winners of each stage of the Tour De France? ",
        choices: [
          {
            id: "a",
            text: "Red"
          },
          {
            id: "b",
            text: "Yellow"
          },
          {
            id: "c",
            text: "Blue"
          }
        ],
        correct: "b"
      }
    ],
    score: 0,
    current: 1
  };

  setCurrent(current) {
    this.setState({ current });
  }

  setScore(score) {
    this.setState({ score });
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = " ";
      var results = <Result {...this.state} />;
    } else {
      scorebox = <Scorebox {...this.state} />;
      results = " ";
    }
    return (
      <div>
        {scorebox}
        <QuestionList
          {...this.state}
          setCurrent={this.setCurrent.bind(this)}
          setScore={this.setScore.bind(this)}
        />
        {results}
      </div>
    );
  }
}

export default App;
