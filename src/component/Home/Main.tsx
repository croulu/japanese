import React from "react";
import { useNavigate } from 'react-router-dom';

export const Main = (props: { handleLevel:(level: string)=>void }) => {
    const { handleLevel } = props;

    const navigate = useNavigate();

    const handleEasyLevelClick = function () {
        handleLevel("facile");

        navigate('/practice');
    }

    const handleHardLevelClick = function () {
        handleLevel("difficile");

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
                    <a onClick={handleEasyLevelClick} className="button">Entrainement facile</a>
                </div>
                <div className="page-block-button">
                    <a onClick={handleHardLevelClick} className="button">Entrainement difficile</a>
                </div>
                <div className="page-block-button">
                    <a onClick={handleLessonClick} className="button button-primary">Voir la leçon</a>
                </div>
            </div>
        </>
    )
};
