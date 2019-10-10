import React from "react";

export default function NewGame(props) {
  return (
    <button className="btn_new-game btn" onClick={props.newGameClick}>
      Новая игра
    </button>
  );
}
