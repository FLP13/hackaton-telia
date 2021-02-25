import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function MobSession({interval, participants}) {
    
    const [countDown, setCountDown] = useState(interval);

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setMinutes(Math.floor(countDown/60));
        setSeconds(countDown % 60);
    }, [countDown]);

    const startTimer = () => {
        setInterval(() => {
            setCountDown(countDown => countDown-1);
        }, 1000);
    };

    return (
        <>
            <span>{minutes}:{seconds}</span>
            <Button variant="primary" onClick={() => startTimer()}>Start</Button>
            <p>{participants}</p>
        </>
    );
}

export default MobSession;