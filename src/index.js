import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import NewGame from "./NewGame";
import Message from "./Message";
import AttemptList from "./Attempt";
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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      riddle: randomNumber(),
      messageGame: "Good Luck!",
      attempt: []
    };
  }

  handleSubmitClick = answer => {
    this.setState(state => ({
      attempt: state.attempt.concat(answer)
    }));

    if (answer < this.state.riddle) {
      this.setState({
        messageGame: "Too Higth!"
      });
    } else if (answer > this.state.riddle) {
      this.setState({ messageGame: "Too Low!" });
    } else if (answer === this.state.riddle) {
      this.setState(state => ({
        messageGame:
          "You found the number in " + state.attempt.length + " attempts!",
        status: true
      }));
    }
  };
  handleNewGameClick = () => {
    this.setState(NEW_GAME);
    this.setState({ riddle: randomNumber() });
  };

  render() {
    return (
      <div>
        <h1>Number guessing game</h1>
        <p>
          Computer have selected a random number between 1 and 100. See if you
          can guess it in 8 turns or less. We'll tell you if your guess was too
          high or too low. ( {this.state.riddle} )
        </p>
        <Message text={this.state.messageGame} />
        {!this.state.status && <Game submitClick={this.handleSubmitClick} />}

        {this.state.status && (
          <AttemptList
            viewsResults={this.state.status}
            list={this.state.attempt}
          />
        )}
        {this.state.status && (
          <NewGame newGameClick={this.handleNewGameClick} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".page"));
