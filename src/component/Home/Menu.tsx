import React from "react";
import { useNavigate } from 'react-router-dom';
import {LEVEL_EASY, LEVEL_DIFFICULT, LEVEL_VERY_DIFFICULT} from "../../domain/Syllable.factory";

export const Menu = (props: { handleLevel:(level: string)=>void }) => {
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
            <div className="page-block">
                <header className="header-main">
                    <a href="/#"><div className="logo-main"></div></a>

                    <nav className="menu-main hamburger-navigation">

                        <label htmlFor="hamburger"><i className="fas fa-bars"></i></label>
                        <input type="checkbox" id="hamburger"/>

                        <div className="hamburger-items">
                            <a className="menu-main-item" onClick={handleEasyLevelClick}>Entrainement facile</a>
                            <a className="menu-main-item" onClick={handleHardLevelClick}>Entrainement difficile</a>
                            <a className="menu-main-item" onClick={handleVeryHardLevelClick}>Entrainement très difficile</a>
                            <a className="menu-main-item" onClick={handleLessonClick}>Leçon</a>
                        </div>
                    </nav>

                </header>
            </div>
        </>
    )
};