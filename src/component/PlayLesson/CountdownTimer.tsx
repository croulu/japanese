import React, {useEffect, useState} from "react";

const onTwoDigits = (numberTimer:number) => String(numberTimer).padStart(2, "0")

export const CountdownTimer = (props: { onTimeout:()=>void }) => {
    const { onTimeout } = props;

    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdown => {
                if (countdown === 1) {
                    clearInterval(interval);
                    onTimeout();
                }
                return countdown - 1;
            })
        }, 1000)
        return () => clearInterval(interval);
    }, []);

    const minutes = onTwoDigits(Math.floor(countdown / 60));
    const seconds = onTwoDigits(countdown % 60);
    return <>
        <div className="countdownTimer">
            <div className="time">{minutes}:{seconds}</div>
        </div>
    </>;
};
