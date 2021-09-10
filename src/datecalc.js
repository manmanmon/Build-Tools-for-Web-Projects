import { formatError } from "./utils.js";
import { DateTime } from "luxon";
import { switcher } from "./switch.js";
const dateCalcResult = document.getElementById("datecalc__result");

calcTitle.addEventListener("click", switcher);

function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate)
        [firstDate, secondDate] = [secondDate, firstDate];

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();

}

export const diffToHtml = diff => `
    <span>
        ${diff.years ? 'Лет: ' + diff.years : ''}
        ${diff.months ? 'Месяцев: ' + diff.months : ''}
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
`;

export function handleCalcDates(event) {

    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        datecalc__result.innerHTML = diffToHtml(diff);
    } else datecalc__result.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}