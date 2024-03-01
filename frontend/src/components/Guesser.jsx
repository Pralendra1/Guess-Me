import React, { useState } from "react";
import styles from "./Guesser.module.css";
function Guesser({ character }) {
  console.log(character);
  const characterName = character.name;
  const characterTags = character.tags;

  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("incorrect");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed");
      console.log("Input value:", inputValue);

      // Check if the entered value matches the character name
      if (inputValue.trim().toLowerCase() === characterName.toLowerCase()) {
        setResult("correct"); // Update result state if it matches
        setTimeout(() => {
          window.location.reload(); // Refresh the page after a delay
        }, 500);
      } else {
        setResult("incorrect"); // Otherwise, indicate try again
      }
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <ul className={styles.tagContainer}>
          {characterTags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Press Enter to guess"
          className={styles.input}
        />
        {result === "correct" ? (
          <h1 className={styles.result}>
            You guessed it right the character is {characterName}
          </h1>
        ) : result === "incorrect" ? (
          <h1 className={styles.result}>Try Again</h1>
        ) : null}
      </div>
    </>
  );
}

export default Guesser;
