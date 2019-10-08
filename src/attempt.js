import React from "react";

function ListItem(props) {
  return (
    <li>
      <a href={"###"}>{props.value}</a>
    </li>
  );
}

export default function AttemptList(props) {
  const numbers = props.list;
  const ListItems = numbers.map((number, index) => (
    <ListItem key={index.toString()} value={number} />
  ));

  return (
    <div className="wrap-ul-list">
      <ul className="attempts">{ListItems}</ul>
    </div>
  );
}
