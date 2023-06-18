import cat from "../../assets/pictures/cat.jpg";

export const Cat = () => {
    return (
        <>
            <button>
                <img className="catImg" src={cat} alt="a cat"></img>
            </button>
        </>
    );
};
