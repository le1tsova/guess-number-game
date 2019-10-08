import React from "react";
import ReactDOM from "react-dom";
import Step from "./step.js";
import Message from "./message.js";
import AttemptList from "./attempt.js";
import "./index.css";

function randomNumber() {
  return Math.floor(1 + Math.random() * (100 + 1 - 1));
}
const NEW_GAME = {
  status: false,
  riddle: randomNumber(),
  messageGame: "Good Luck",
  attempt: []
};
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      riddle: randomNumber(),
      messageGame: "Good Luck!",
      attempt: []
    };
    this.textInputRef = React.createRef();
  }

  handleNewGameClick = () => {
    if (this.state.status) {
      this.textInputRef.current.value = "";
      this.setState(NEW_GAME);
      this.setState({ riddle: randomNumber() });
    } else {
      this.setState({ status: true });
    }
  };

  handleSubmitClick = () => {
    let answer = Number(this.textInputRef.current.value);

    const currentAttempt = this.state.attempt;
    currentAttempt.push(answer);

    this.setState({
      attempt: currentAttempt
    });

    if (answer < this.state.riddle) {
      this.setState({ messageGame: "Too Higth!" });
    } else if (answer > this.state.riddle) {
      this.setState({ messageGame: "Too Low!" });
    } else if (answer === this.state.riddle) {
      this.setState(state => ({
        messageGame:
          "You found the number in " + state.attempt.length + " attempts!",
        status: true
      }));
    }
    this.textInputRef.current.value = "";
  };
  render() {
    let isActiveComponent = this.state.status;
    let button;
    let attepmptList;

    if (isActiveComponent) {
      button = (
        <Step value={isActiveComponent} onClick={this.handleNewGameClick} />
      );
      attepmptList = (
        <AttemptList
          viewsResults={this.state.status}
          list={this.state.attempt}
        />
      );
    } else {
      button = (
        <Step value={isActiveComponent} onClick={this.handleSubmitClick} />
      );
      attepmptList = null;
    }

    return (
      <div>
        <h1>Number guessing game</h1>
        <p>
          Computer have selected a random number between 1 and 100. See if you
          can guess it in 8 turns or less. We'll tell you if your guess was too
          high or too low. ( {this.state.riddle} )
        </p>
        <Message text={this.state.messageGame} />
        <div className="wrap">
          <input type="text" ref={this.textInputRef} />
          {button}
        </div>
        {attepmptList}
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
