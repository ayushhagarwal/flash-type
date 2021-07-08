import React from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestContainer/TestContainer";

const ChallengeSection = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
}) => {
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-header">
        Take a speed test now!
      </h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        words={words}
        characters={characters}
        wpm={wpm}
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
        testInfo={testInfo}
      />
    </div>
  );
};
export default ChallengeSection;
