import React from "react";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attempt: ""
    };
  }
  textInputRef = React.createRef();

  handleClick = e => {
    e.preventDefault();
    if (this.state.attempt) {
      this.props.submitClick(Number(this.state.attempt));
    }
    this.setState({ attempt: "" });
  };

  handleChange = e => {
    const reg = new RegExp("^[0-9]+$");
    if (reg.test(e.target.value)) {
      this.setState({
        attempt: e.target.value
      });
    }
  };
  componentDidMount() {
    this.textInputRef.current.focus();
  }
  render() {
    return (
      <form className="game-form">
        <input
          type="text"
          ref={this.textInputRef}
          className="game-form__input"
          onChange={this.handleChange}
          value={this.state.attempt}
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
