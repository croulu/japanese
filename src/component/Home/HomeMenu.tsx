import React from "react";
import { useNavigate } from 'react-router-dom';

export const HomeMenu = () => {
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

    return (
        <>
            <div className="page-block">
                <header className="header-main">
                    <a><div className="logo-main"></div></a>

                    <nav className="menu-main hamburger-navigation">

                        <label htmlFor="hamburger"><i className="fas fa-bars"></i></label>
                        <input type="checkbox" id="hamburger"/>

                        <div className="hamburger-items">
                            <a className="menu-main-item" onClick={handleEasyLevelClick}>Entrainement facile</a>
                            <a className="menu-main-item" onClick={handleHardLevelClick}>Entrainement difficile</a>
                            <a className="menu-main-item" onClick={handleLessonClick}>Leçon</a>
                        </div>
                    </nav>

                </header>
            </div>
        </>
    )
};