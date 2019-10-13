import React from "react";

const HEARTS = {
  heart: "❤️",
  brokenHeart: "💔"
};

export default function HealthPoints(props) {
  const emojiStr =
    HEARTS.brokenHeart.repeat(props.sumAttempts) +
    HEARTS.heart.repeat(8 - props.sumAttempts);

  return <p>{emojiStr}</p>;
}
