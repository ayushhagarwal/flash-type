import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
const TypingChallengeContainer = ({ words, characters, wpm }) => {
  return (
    <div className="typing-challenge-container">
      <div className="details-container">
        {/* Words Typed */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />

        {/* Characters Typed */}
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

        {/* Mistakes */}
        <ChallengeDetailsCard cardName="WPM" cardValue={wpm} />
      </div>
      <div className="typewriter-container">
        <TypingChallenge selectedParagraph="Hello World" />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
