import React from "react";
import { useNavigate } from 'react-router-dom';

export const HomeHero = () => {
    const navigate = useNavigate();

    const handleEasyLevelClick = function () {

        navigate('/practice');
    }

    const handleHardLevelClick = function () {


        navigate('/practice');
    }

    const handleLessonClick = function () {
        navigate('/practice');
    }

    // const lessons:Array<Lesson> = groupLessonsInCatalog();

    return (
        <>
            <div className="page-block-content mt mb">
                <h1 className=" hero-main hero-main-title">Apprenez vos kanas !</h1>
                <p className=" hero-main hero-main-subtitle">Bon, d'accord ce n'est pas facile, nous allons vous aider
                    ;)</p>
                <div className="page-block-button">
                    <a href="/#" onClick={handleEasyLevelClick} className="button">Entrainement facile</a>
                </div>
                <div className="page-block-button">
                    <a href="/#" onClick={handleHardLevelClick} className="button">Entrainement difficile</a>
                </div>
                <div className="page-block-button">
                    <a href="/#" onClick={handleLessonClick} className="button button-primary">Voir la leçon</a>
                </div>
            </div>
        </>
    )
};