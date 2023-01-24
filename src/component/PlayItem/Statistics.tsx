import React from "react";

export const Statistics = (props: { statistics:string }) => {
    const { statistics } = props;

    return (
        <>
            <div className="info">
                <div id="info">{statistics}</div>
            </div>
        </>
    );
};
