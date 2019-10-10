import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import NewGame from "./NewGame";
import Message from "./Message";
import AttemptList from "./Attempt";
import "./index.css";

function randomNumber() {
  return Math.floor(1 + Math.random() * 100);
}
const NEW_GAME = {
  status: false,
  riddle: randomNumber(),
  messageGame: "Good Luck!",
  attempt: []
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = NEW_GAME;
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
    this.setState(state => {
      if (state.attempt.length === 8) {
        return {
          messageGame: "The answer is " + state.riddle + ". GAME OVER!",
          status: true
        };
      }
    });
  };
  handleNewGameClick = () => {
    this.setState(NEW_GAME);
    this.setState({ riddle: randomNumber() });
  };

  render() {
    const status = this.state.status;
    return (
      <div>
        <h1>Number guessing game</h1>
        <p>
          Computer have selected a random number between 1 and 100. See if you
          can guess it in 8 turns or less. We'll tell you if your guess was too
          high or too low.
        </p>

        <Message>{this.state.messageGame}</Message>
        {!status && <Game submitClick={this.handleSubmitClick} />}

        {status && (
          <AttemptList
            viewsResults={this.state.status}
            list={this.state.attempt}
          />
        )}
        {status && <NewGame newGameClick={this.handleNewGameClick} />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".page"));
