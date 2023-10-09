import React, {useState} from 'react';
import {Outlet} from "react-router";
import classes from "./FightField.module.css"
import GameButton from "../../UI/GameButton/GameButton";

//TODO: Сверстать аутлет

const FightField = () => {

    const stages = ["preparing", "userTurn", "aiTurn", "win", "lose"]

    const FightHeadings = {
        preparing: "Расставьте корабли!",
        userTurn: "Ваш ход!",
        aiTurn: "Ход противника!",
        win: "Победа!",
        lose: "Поражение"
    }

    const FightSubheadings = {
        preparing: "Кликайте на игровые клетки",
        userTurn: "Атакуйте вражеское поле боя",
        aiTurn: "Ожидайте хода противника...",
        win: "Вы разгромили флотилию противника!",
        lose: "Противник потопил вашу флотилию"
    }

    const GameButtonTexts = {
        preparing: "Поставить корабль",
        userTurn: "Сделать ход!",
        aiTurn: "Сделать ход!",
        win: "Главное меню",
        lose: "Главное меню"
    }

    const [stage, setStage] = useState(stages[0])

    function handleGameButtonClick(){
        if(stage !== stages[stages.length-1]){
            setStage(stages[stages.indexOf(stage)+1])
        }
    }

    return (
        <div>
            <h1 className={classes.FightHeading}>{FightHeadings[stage]}</h1>
            <h2 className={classes.FightSubheading}>{FightSubheadings[stage]}</h2>

            <Outlet/>

            <GameButton
                disabled={
                stage === "aiTurn"
                }
                onClick={handleGameButtonClick}
            >
                {GameButtonTexts[stage]}
            </GameButton>
        </div>
    );
};

export default FightField;