import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { switcher } from "./switch.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const timerRun = document.getElementById("timer_run");
const timerStop = document.getElementById("timer_stop");
const timeOutput = document.getElementById("time_output");
const timeInput = document.getElementById("time_input");

timerTitle.addEventListener("click", switcher);
calcTitle.addEventListener("click", switcher);

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {

    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        datecalc__result.innerHTML = diffToHtml(diff);
    } else datecalc__result.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

var sound = new Howl({
    src: ['sounds/sound.mp3']
});

timerRun.addEventListener("click", startTimer);

function startTimer(event) {
    event.preventDefault();

    let objTime = timeInput.value.split(':')
    let arrTime = {
        hours: objTime[0],
        minutes: objTime[1],
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