import React from "react";

export default class NewGame extends React.Component {
  buttonRef = React.createRef();
  componentDidMount() {
    this.buttonRef.current.focus();
  }

  render() {
    return (
      <button
        ref={this.buttonRef}
        className="btn_new-game btn"
        onClick={this.props.newGameClick}
      >
        Новая игра
      </button>
    );
  }
}
