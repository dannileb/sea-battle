import React, {useState} from 'react';
import classes from "./MainMenu.module.css";
import MenuButton from "../../UI/MenuButton/MenuButton";
import NameInput from "../../UI/NameInput/NameInput";

const MainMenu = () => {
    const [name, setName] = useState("");

    const [isEditing, setIsEditing] = useState(true);


    return (
        <div className={classes.MainMenu}>
            <h1 className={classes.MainMenuHeading}>Морской бой</h1>

            <div className={classes.NameInput}>
                {
                    isEditing ?
                        <NameInput
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        :
                        <p className={classes.UserName}>{name}</p>
                }

                <button
                    className={classes.NameEditButtton}
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {
                        isEditing ?
                            "Сохранить имя"
                            :
                            "Изменить имя"
                    }
                </button>

            </div>

            <div className={classes.ButtonsWrapper}>
                <MenuButton gameMode="queue"/>
                <MenuButton gameMode="byMiss"/>
            </div>
        </div>
    );
};

export default MainMenu;