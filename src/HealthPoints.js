import React from "react";

const HEARTS = {
  heart: "❤️",
  brokenHeart: "💔"
};

export default function HealthPoints(props) {
  let sumAttempts = props.sumAttempts.length;
  let emojiStr =
    HEARTS.brokenHeart.repeat(sumAttempts) +
    HEARTS.heart.repeat(8 - sumAttempts);

  return <p>{emojiStr}</p>;
}
