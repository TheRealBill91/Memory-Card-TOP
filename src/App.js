import "./styles/normalize.css";
import "./styles/App.css";
import { scrambleArray } from "./utils/scrambleArr";
import { animalData } from "./animalData";
import { Animal } from "./components/Animal";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { useState } from "react";

export const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [data, setData] = useState(animalData);

  const newHighScore = () => {
    if (highScore > 0) {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
    } else {
      setHighScore(currentScore);
    }
  };

  const resetGameState = () => {
    setCurrentScore(0);
    setData(animalData);
  };

  const handlePlayerMove = (animalData) => {
    if (animalData.alreadyClicked === true) {
      newHighScore();
      resetGameState();
    } else {
      setData(data.filter((item) => item.id !== animalData.id));
      const newAnimalData = {
        ...animalData,
        alreadyClicked: true,
      };
      setData((data) => [...data, newAnimalData]);
      setCurrentScore(currentScore + 1);
    }
  };

  /* Scrambles array (and cards in UI) when component first mounts */
  useEffect(() => {
    const newArr = [...data];
    scrambleArray(newArr);
    setData(newArr);
  }, []);

  /*  */
  useEffect(() => {
    if (currentScore === 12) {
      newHighScore();
      resetGameState();
    }
  }, [currentScore]);

  useEffect(() => {
    const newArr = [...data];
    scrambleArray(newArr);
    setData(newArr);
  }, [currentScore, highScore]);

  return (
    <>
      <Header />
      <main>
        <div className="topBarContainer">
          <div>Max Score: 12</div>
          <p>
            <strong>Score: {currentScore}</strong>
          </p>
          <p>High Score: {highScore}</p>
        </div>
        <div className="cardsContainer">
          {data.map((animalData) => (
            <Animal
              key={animalData.id}
              style={animalData.style}
              handlePlayerMove={() => handlePlayerMove(animalData)}
            ></Animal>
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
