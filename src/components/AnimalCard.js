export const AnimalCard = (props) => {
  const { style, handlePlayerMove } = props;
  return (
    <>
      <button onClick={handlePlayerMove}>
        <div className={style}></div>
      </button>
    </>
  );
};
