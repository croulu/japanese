import React, {useEffect, useState} from "react";

const onTwoDigits = (numberTimer:number) => String(numberTimer).padStart(2, "0")

export const CountdownTimer = (props: { onTimeout:()=>void }) => {
    const { onTimeout } = props;

    const [counter, setCounter] = useState(59);

    useEffect(() => {
        counter > 0 && setTimeout(() => {
                setCounter(counter - 1);
                if (counter === 1) {
                    onTimeout();
                }
        }, 1000);
    }, [counter, onTimeout]);


    return <>
        <div className="countdownTimer">
            <div>00:{onTwoDigits(counter)}</div>
        </div>
    </>;
};

