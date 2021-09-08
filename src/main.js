import { handleCalcDates } from "./datecalc.js";
import { startTimer } from "./timer.js";
const dateCalcForm = document.getElementById("datecalc");
const timerRun = document.getElementById("timer_run");

dateCalcForm.addEventListener("submit", handleCalcDates);
timerRun.addEventListener("click", startTimer);

