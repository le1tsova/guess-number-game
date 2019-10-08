import React from "react";
export default function Step(props) {
  if (props.value) {
    return <button onClick={props.onClick}>Новая игра</button>;
  }
  return <button onClick={props.onClick}>Отправить число</button>;
}
