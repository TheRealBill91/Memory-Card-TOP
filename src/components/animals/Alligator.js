import alligator from "../../assets/pictures/alligator.jpg";

export const Alligator = () => {
    return (
        <>
            <button>
                <img
                    src={alligator}
                    style={{ width: "200px" }}
                    alt="an alligator"
                ></img>
            </button>
        </>
    );
};
