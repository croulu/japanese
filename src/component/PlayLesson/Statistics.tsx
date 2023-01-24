import React from "react";

export const Statistics = (props: { statistics:string, informations:string }) => {
    const { statistics, informations } = props;

    return (
        <>
            <div className="info">
                <div id="info">{statistics} {informations}</div>
            </div>
        </>
    );
};
