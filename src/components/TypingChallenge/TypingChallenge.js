import React from "react";
import "./TypingChallenge.css";

const TypingChallenge = ({
  selectedParagraph,
  timerStarted,
  timeRemaining,
  testInfo,
}) => {
  console.log(testInfo);
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">
          00:
          {timeRemaining > 9 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className="timer-info">
          {!timerStarted && "Start typing to start the test"}
        </p>
      </div>
      <div className="textarea-container">
        <div className="textarea-left ">
          <div className="textarea test-paragraph">{selectedParagraph}</div>
        </div>
        <div className="textarea-right ">
          <textarea
            className="textarea"
            placeholder="Start typing here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
