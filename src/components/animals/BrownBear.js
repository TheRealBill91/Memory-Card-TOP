import brownbear from "../../assets/pictures/brown-bear.jpg";

export const BrownBear = () => {
    return (
        <>
            <button>
                <img
                    src={brownbear}
                    style={{ width: "200px" }}
                    alt="a brown bear"
                ></img>
            </button>
        </>
    );
};
