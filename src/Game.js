import React from "react";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
  }
  handleClick = e => {
    e.preventDefault();
    this.props.submitClick(Number(this.textInputRef.current.value));
    this.textInputRef.current.value = "";
  };
  render() {
    return (
      <form className="game-form">
        <input
          type="text"
          ref={this.textInputRef}
          className="game-form__input"
        />
        <button
          className="game-form__btn_submit btn"
          onClick={this.handleClick}
        >
          Отправить число
        </button>
      </form>
    );
  }
}
