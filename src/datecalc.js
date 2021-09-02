import { DateTime } from "https://moment.github.io/luxon/es6/luxon.min.js";

export function diffDates(firstDate, secondDate) {
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