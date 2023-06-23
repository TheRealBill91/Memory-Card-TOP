import { AnimalCard } from "./AnimalCard";

export const CardContainer = (props) => {
  const { data, handlePlayerMove } = props;
  return (
    <div className="cardsContainer">
      {data &&
        data.map((animalData) => (
          <AnimalCard
            key={animalData.id}
            style={animalData.style}
            handlePlayerMove={() => handlePlayerMove(animalData)}
          ></AnimalCard>
        ))}
    </div>
  );
};
