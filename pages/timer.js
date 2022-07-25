import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Timer(){
    const [timeLimit = 30, setTimeLimit] = useState();
    const [time, setTime] = useState(timeLimit);
    const [timerOn, setTimerOn] = useState(false);


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
        setTime(timeLimit);
        }

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
            <button className="btn btn-primary m-3" onClick={() => handleTimeLimit(true)}>increase time</button>
            <button className="btn btn-primary m-3" onClick={() => handleTimeLimit(false)}>decrease time</button>
            </div>
        </div>
    );
}