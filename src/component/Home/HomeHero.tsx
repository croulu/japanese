import React from "react";
import { useNavigate } from 'react-router-dom';

import {Lesson} from "../../domain/Lesson";
import {groupLessonsInCatalog} from "../../domain/Syllable.factory";
import {SyllableKana} from "../../domain/SyllableKana";
import {SyllableRomaji} from "../../domain/SyllableRomaji";

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

    const lessons:Array<Lesson> = groupLessonsInCatalog();
    let kanas:Array<string> = [];
    let romajis:Array<string> = [];

    lessons.forEach(lesson =>
        lesson.syllables.forEach(
            syllable => {
                //console.log(syllable.alphabet);
                const syllableKana = new SyllableKana(syllable.alphabet, syllable.consonant, syllable.vowel)
                const syllableRomaji = new SyllableRomaji(syllable.alphabet, syllable.consonant, syllable.vowel)
                kanas.push(syllableKana.display());
                romajis.push(syllableRomaji.display());
            }))

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
            <div className=" hero-main hero-main-subtitle">
                {kanas[0]}{kanas[1]}{kanas[2]}{kanas[3]}{kanas[4]}
            </div>
            <div className=" hero-main hero-main-subtitle">
                {romajis[0]}{romajis[1]}{romajis[2]}{romajis[3]}{romajis[4]}
            </div>
        </>
    )
};