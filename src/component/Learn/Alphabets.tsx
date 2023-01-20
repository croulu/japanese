import React from "react";

import {Lesson} from "../../domain/Lesson";
import {KanaInAlphabet} from "./KanaInAlphabet";

export const Alphabets = (props: { lessons: Array<Lesson> }) => {
    const { lessons } = props;
    return (
        <div>
            {
                lessons.map((lesson) =>
                    <div><KanaInAlphabet
                        key={"bbb"}
                        lesson={lesson} /></div>
                )}
        </div>
    );
};
