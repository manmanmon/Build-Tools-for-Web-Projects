const calcTitle = document.getElementById("calcTitle");
const timerTitle = document.getElementById("timerTitle");
const dateCalcForm = document.getElementById("datecalc");
const timerForm = document.getElementById("timer");

export function switcher(){
    dateCalcForm.classList.toggle("hidden");
    timerForm.classList.toggle("hidden");
    calcTitle.classList.toggle("show");
    timerTitle.classList.toggle("show");
}
