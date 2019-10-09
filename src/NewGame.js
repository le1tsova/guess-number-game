import React from "react";

export default class NewGame extends React.Component {
  handleClick = () => {
    this.props.newGameClick();
  };
  render() {
    return (
      <button className="btn_new-game btn" onClick={this.handleClick}>
        Новая игра
      </button>
    );
  }
}
