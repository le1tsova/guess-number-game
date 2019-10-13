import React from "react";
import { MAX_ATTEMPTS } from "./data";

const HEARTS = {
  heart: "❤️",
  brokenHeart: "💔"
};

export default function HealthPoints(props) {
  const emojiStr =
    HEARTS.brokenHeart.repeat(props.sumAttempts) +
    HEARTS.heart.repeat(MAX_ATTEMPTS - props.sumAttempts);

  return <p>{emojiStr}</p>;
}
