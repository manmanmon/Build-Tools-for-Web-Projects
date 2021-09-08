import { switcher } from "./switch.js";
const timerStop = document.getElementById("timer_stop");
const timeOutput = document.getElementById("time_output");
const timeInput = document.getElementById("time_input");

timerTitle.addEventListener("click", switcher);

export function startTimer(event) {
    event.preventDefault();

    let objTime = timeInput.value.split(':')
    let arrTime = { 
        hours: objTime[0], minutes: objTime[1],
        seconds: objTime[2],
    }

    let setTimer = setInterval(() => {
        let currentTime = `${arrTime.hours}:${arrTime.minutes}:${arrTime.seconds}`;

        if (arrTime.hours == 0 && arrTime.minutes == 0 && arrTime.seconds == 0) {
            clearInterval(setTimer);
            --arrTime.seconds;
            sound.play();
        }
        if (arrTime.seconds == '00') {
            if (arrTime.minutes > 0) {
                --arrTime.minutes;
                arrTime.seconds = '59';
                timeOutput.innerHTML = currentTime;
            } else if (arrTime.minutes == 0 && arrTime.hours > 0) {
                --arrTime.hours;
                arrTime.minutes = '59';
                arrTime.seconds = '59';
                timeOutput.innerHTML = currentTime;
            }
        } else {
            timeOutput.innerHTML = currentTime;
            --arrTime.seconds;
        }
    }, 1000)

    //Отработка клика по кнопке "Стоп"
    timerStop.addEventListener("click", stopTimer);

    function stopTimer(event) {
        event.preventDefault();
        clearInterval(setTimer);
        timeOutput.innerHTML = "00:00:00";
    }
}

var sound = new Howl({
    src: ['sounds/sound.mp3']
});