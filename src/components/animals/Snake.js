import snake from "../../assets/pictures/speckled-rattlesnake.jpg";

export const Snake = () => {
    return (
        <>
            <button>
                <img
                    src={snake}
                    style={{ width: "200px" }}
                    alt="a speckled rattlesnake"
                ></img>
            </button>
        </>
    );
};
