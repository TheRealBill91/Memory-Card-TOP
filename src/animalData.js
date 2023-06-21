import uniqid from "uniqid";
import styles from "./styles/animalCards.module.css";

export const animalData = [
    { id: uniqid(), style: styles.alligatorImgFrame, alreadyClicked: false },
    { id: uniqid(), style: styles.blackLabImgFrame, alreadyClicked: false },
    { id: uniqid(), style: styles.brownBearImgFrame, alreadyClicked: false },
    { id: uniqid(), style: styles.catImgFrame, alreadyClicked: false },
    { id: uniqid(), style: styles.cheetahImgFrame, alreadyClicked: false },
    { id: uniqid(), style: styles.eagleImgFrame, alreadyClicked: false },
    { id: uniqid(), style: styles.elephantImgFrame, alreadyClicked: false },
    { id: uniqid(), style: styles.hippoImgFrame, alreadyClicked: false },
    { id: uniqid(), style: styles.rhinoImgFrame, alreadyClicked: false },
    { id: uniqid(), style: styles.sharkImgFrame, alreadyClicked: false },
    { id: uniqid(), style: styles.snakeImgFrame, alreadyClicked: false },
    { id: uniqid(), style: styles.tigerImgFrame, alreadyClicked: false },
];
