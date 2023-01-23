import React from "react";

import {Lesson} from "../../domain/Lesson";

export const PlayItem = (props: { lesson: Lesson, level:string }) => {
    const { lesson, level } = props;
    return (
        <div className="page-block-content">{level}
            <div>
                Je joue !
            </div>
        </div>
    );
};
