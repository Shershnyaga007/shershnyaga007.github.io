const main = document.getElementById('main');

let today = new Date();
let dayOfWeek = today.getDay();
main.innerHTML = `Номер текущего дня недели: ${dayOfWeek}`;

function showDay(day) {
    let days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    return days[day];
}

let currentDay = showDay(dayOfWeek);
main.innerHTML += `<br>Текущий день недели: ${currentDay}`;

let someDay = new Date(2015, 0, 7);
let dayOfWeek2015 = someDay.getDay();
let russianDay2015 = showDay(dayOfWeek2015);
main.innerHTML += `<br>7 января 2015 года был: ${russianDay2015}`;

