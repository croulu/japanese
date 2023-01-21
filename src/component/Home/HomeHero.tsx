import React from "react";
import { useNavigate } from 'react-router-dom';

import {Lesson} from "../../domain/Lesson";
import {LessonComponent} from "../Play/LessonComponent";
import {Alphabets} from "../Learn/Alphabets";

export const HomeHero  = (props: { lessons: Array<Lesson> }) => {
    const { lessons } = props;
    const navigate = useNavigate();

    const handleEasyLevelClick = function () {

        navigate('/practice');
    }

    const handleHardLevelClick = function () {


        navigate('/practice');
    }

    const handleLessonClick = function () {
        navigate('/alphabets');
    }

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
            <div id="playMenu" className="page-block-content">
                <LessonComponent
                    key={"aaa"}
                    lessons={lessons}
                    ></LessonComponent>
            </div>
            <div className="page-block-content">
                <Alphabets
                    key={"aaa"}
                    lessons={lessons}
                    ></Alphabets>
            </div>
        </>
    )
};