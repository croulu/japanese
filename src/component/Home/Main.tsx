import React from "react";
import { useNavigate } from 'react-router-dom';

import {Lesson} from "../../domain/Lesson";
import {Alphabets} from "../Learn/Alphabets";
import {AlphabetsToPlay} from "../Play/AlphabetsToPlay";
import {Alphabet} from "../../domain/Alphabet";

export const Main  = (props: { alphabets:Array<Alphabet>, lessons: Array<Lesson> }) => {
    const { alphabets } = props;
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
                <h1 className=" main main-title">Apprenez vos kanas !</h1>
                <p className=" main main-subtitle">Bon, d'accord ce n'est pas facile, nous allons vous aider
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
                <AlphabetsToPlay
                    key={"aa1"}
                    alphabets={alphabets}
                    ></AlphabetsToPlay>
            </div>
        </>
    )
};
/*
            <div className="page-block-content">
                <Alphabets
                    key={"aa2"}
                    lessons={lessons}
                    ></Alphabets>
            </div>
 */