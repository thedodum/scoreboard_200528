import React, {useState, useEffect, useRef} from 'react';

const Stopwatch = (props) => {
    let tickRef;

    let [isRunning, setIsRunning] = useState(false);
    let [timer, setTimer] = useState(0);

    useInterval(() => {
        // Your custom logic here
        if (isRunning) {
            setTimer(timer + 1);
        }
    }, 1000);

    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{timer}</span>
            <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={() => setTimer(0)}>Reset</button>
        </div>
    )
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default Stopwatch;
