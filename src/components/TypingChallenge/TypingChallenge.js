import React from "react";
import "./TypingChallenge.css";
import TestLetter from "../TestLetter/TestLetter";

const TypingChallenge = ({
  timerStarted,
  timeRemaining,
  testInfo,
  onInputChange,
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
          <div className="textarea test-paragraph">
            {testInfo.map((individualLetterInfo, index) => {
              return (
                <TestLetter
                  key={index}
                  individualLetterInfo={individualLetterInfo}
                />
              );
            })}
            {/* {selectedParagraph} */}
          </div>
        </div>
        <div className="textarea-right ">
          <textarea
            onChange={(e) => onInputChange(e.target.value)}
            className="textarea"
            placeholder="Start typing here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
