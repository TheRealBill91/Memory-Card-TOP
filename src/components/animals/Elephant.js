import elephant from "../../assets/pictures/elephant.jpg";

export const Elephant = () => {
    return (
        <>
            <button>
                <img src={elephant} style={{ width: "200px" }} alt="an elephant"></img>
            </button>
        </>
    );
};
