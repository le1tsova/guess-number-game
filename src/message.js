import React from "react";

export default class Message extends React.Component {
  render() {
    return <p className="message">{this.props.text}</p>;
  }
}
