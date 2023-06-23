import "../styles/normalize.css"
import "../styles/App.css";
import { scrambleArray } from "../utils/scrambleArr";
import { animalData } from "../animalData"
import { useEffect } from "react";
import { Header } from "./Header";
import { useState } from "react";
import { CardContainer } from "./CardContainer";

export const Game = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [data, setData] = useState(animalData);

  const newHighScore = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  };

  const resetGame = () => {
    setData(animalData)
    setCurrentScore(0);
  };

  const handlePlayerMove = (animalData) => {
    if (animalData.alreadyClicked === true) {
      newHighScore();
      resetGame();
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

  useEffect(() => {
    const newArr = [...data];
    scrambleArray(newArr);
    setData(newArr);
  }, []);

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
        <CardContainer handlePlayerMove={handlePlayerMove} data={data} />
      </main>
    </>
  );
};
