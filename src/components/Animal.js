export const Animal = ({ style, handlePlayerMove }) => {
    return (
        <>
            <button onClick={handlePlayerMove}>
                <div className={style}></div>
            </button>
        </>
    );
};
