import rhino from "../../assets/pictures/baby-rhino.jpg";

export const Rhino = () => {
    return (
        <>
            <button >
                <img className="rhinoImg" src={rhino} style={{ width: "200px" }} alt="a baby rhino"></img>
            </button>
        </>
    );
};
