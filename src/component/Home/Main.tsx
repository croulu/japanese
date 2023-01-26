import React from "react";
import { useNavigate } from 'react-router-dom';
import {LEVEL_EASY, LEVEL_DIFFICULT, LEVEL_VERY_DIFFICULT} from "../../domain/Syllable.factory";

export const Main = (props: { handleLevel:(level: string)=>void }) => {
    const { handleLevel } = props;

    const navigate = useNavigate();

    const handleEasyLevelClick = function () {
        handleLevel(LEVEL_EASY);

        navigate('/practice');
    }

    const handleHardLevelClick = function () {
        handleLevel(LEVEL_DIFFICULT);

        navigate('/practice');
    }

    const handleVeryHardLevelClick = function () {
        handleLevel(LEVEL_VERY_DIFFICULT);

        navigate('/practice');
    }

    const handleLessonClick = function () {
        navigate('/alphabets');
    }

    return (
        <>
            <div className="page-block-content mt mb">
                <h1 className=" main main-title">Apprenez vos kanas !</h1>
                <p className=" main main-subtitle">Bon, d'accord ce n'est pas facile, nous allons vous aider
                    ;)</p>
                <div className="page-block-button">
                    <button onClick={handleEasyLevelClick} className="button">Entrainement facile</button>
                </div>
                <div className="page-block-button">
                    <button onClick={handleHardLevelClick} className="button">Entrainement difficile</button>
                </div>
                <div className="page-block-button">
                    <button onClick={handleVeryHardLevelClick} className="button">Entrainement très difficile</button>
                </div>
                <div className="page-block-button">
                    <button onClick={handleLessonClick} className="button button-primary">Voir la leçon</button>
                </div>
            </div>
        </>
    )
};
