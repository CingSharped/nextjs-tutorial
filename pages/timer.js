import { useState } from "react";
import Link from "next/link";

const Timer = () => {
    const [timeLimit = 30, setTimeLimit] = useState();
    const [time, setTime] = useState(timeLimit);
    const [timerOn, setTimerOn] = useState(false);
    //const timerLoop = document.getElementById('timerLoop');


    function handleTimerOn(){
        if (timerOn) {
            clearInterval(timerOn);
            setTimerOn(false);
            return;
          }
          const newIntervalId = setInterval(() => {
            setTime(prevCount => prevCount - 1);
          }, 1000);
          setTimerOn(newIntervalId);
    }

    if (time <= 0) {
        // Check if loop checkbox is checked
        // if checked then...
        setTime(timeLimit);
        }
        // If not checked, stop timer, set timerOn to false

    function handleTimeLimit(increment){
        setTimeLimit(increment ? timeLimit + 5 : (timeLimit - 5) <= 0 ? timeLimit : timeLimit - 5);
        setTime(time => time = increment ? timeLimit + 5 : (timeLimit - 5) <= 0 ? timeLimit : timeLimit - 5);
    }


    return (
        <div className="card text-center position-absolute top-50 start-50 translate-middle">
            {timerOn > 0 ? (<div className="card-header" style={{background: 'lightgreen'}}>Timer On</div>) : (<div className="card-header" style={{background: 'rgb(255, 0, 0)'}}>Timer Off</div>)}
            <div className="card-body">
            <h1 className="card-title">Time: {time}</h1>
            <p className="card-text">Time length: {timeLimit}</p>
            <button className="btn btn-primary m-3" onClick={() => handleTimerOn()}>{timerOn ? 'Pause' : 'Start'}</button>
            <br></br>
            {/* insert loop checkbox to set timer loop behaviour*/}
            <button className="btn btn-primary m-3" onClick={() => handleTimeLimit(true)}>increase time</button>
            <button className="btn btn-primary m-3" onClick={() => handleTimeLimit(false)}>decrease time</button>
            <br></br>
            <Link href="/"><a>Back to home</a></Link>
            </div>
        </div>
    );
}

export default Timer;