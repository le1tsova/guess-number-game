import React from "react";

function ListItem(props) {
  return (
    <li className="attempts__list__item">
      <p className="attempts__list__item__p">{props.value}</p>
    </li>
  );
}

export default function AttemptList(props) {
  const numbers = props.list;
  const ListItems = numbers.map((number, index) => (
    <ListItem key={index} value={number} />
  ));

  return (
    <div className="attempts">
      <ul className="attempts__list">{ListItems}</ul>
    </div>
  );
}
