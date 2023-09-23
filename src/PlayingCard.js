import React from "react";
import backOfCard from "./back.png";
import useFlip from "./hooks";
import "./PlayingCard.css";

function PlayingCard({ front }) {
  const [isFacingUp, toggleIsFacingUp] = useFlip();

  return (
    <img
      src={isFacingUp ? front : backOfCard}
      alt="playing card"
      onClick={toggleIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;