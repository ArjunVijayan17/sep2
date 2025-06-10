import React, { useState } from "react";
function GuessGame() {
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const numericGuess = Number(guess);
    setAttempts(attempts + 1);

    if (numericGuess === targetNumber) {
      setFeedback(
        `Congratulations! You've guessed it in ${attempts + 1} attempts.`
      );
    } else if (numericGuess < targetNumber) {
      setFeedback("Too low! Try again.");
    } else if (numericGuess > targetNumber) {
      setFeedback("Too high! Try again.");
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setFeedback("");
    setAttempts(0);
  };

  return (
    <div className="App">
      <h1>Guess the Number!</h1>
      <p>Guess a number between 1 and 100.</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <button onClick={resetGame}>Reset Game</button>
      <p>{feedback}</p>
      <p>Attempts: {attempts}</p>
    </div>
  );
}

export default GuessGame;