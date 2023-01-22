import React from "react";
import {Lesson} from "../../domain/Lesson";
import {Alphabet} from "../../domain/Alphabet";
import {LessonsToPlay} from "./LessonsToPlay";


export const AlphabetsToPlay = (props: {  lessons: Array<Lesson> }) => {
    const { lessons } = props;
    const alphabets:Array<Alphabet> = [];
    return (
        <>
            <LessonsToPlay
                key={"bbb"}
                lessons={lessons} />
        </>
    );
};
