import React from "react";

let interval;

function SecondsCounter() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    const start = () => {
        if (interval) return;
        interval = setInterval(() => {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            document.querySelector(".segundos").innerText = seconds;
            document.querySelector(".minutos").innerText = minutes;
            document.querySelector(".horas").innerText = hours;
        }, 1000);
    };

    const stop = () => {
        clearInterval(interval);
        interval = null;
    };

    return (
        <div>
            <div className="container-fluid d-flex justify-content-center align-items-center bg-black gap-3">
                <i className="fa-regular fa-clock p-4 bg-dark text-light fs-1 card"></i>
                <div className="horas bg-dark text-light fs-1 card p-3">0</div>
                <div className="bg-dark text-light fs-1 card p-3">:</div>
                <div className="minutos bg-dark text-light fs-1 card p-3">0</div>
                <div className="bg-dark text-light fs-1 card p-3">:</div>
                <div className="segundos bg-dark text-light fs-1 card p-3">0</div>
            </div>
            <div className="btn-group mt-3" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-dark" onClick={start}>Start</button>
                <button type="button" className="btn btn-dark" onClick={stop}>Stop</button>
            </div>
        </div>
    );
}

export default SecondsCounter;

