const main = document.getElementById('main');

let now = new Date();

main.innerHTML = "Текущий день: " + now.getDate() + "<br>";
main.innerHTML += "Текущий месяц: " + (now.getMonth() + 1) + "<br>";
main.innerHTML += "Текущий год: " + now.getFullYear() + "<br>";

function addLeadingZero(num) {
    return (num < 10 ? "0" : "") + num;
}

let formattedDate =
    addLeadingZero(now.getHours()) +
    ":" +
    addLeadingZero(now.getMinutes()) +
    ":" +
    addLeadingZero(now.getSeconds()) +
    " " +
    addLeadingZero(now.getDate()) +
    "." +
    addLeadingZero(now.getMonth() + 1) +
    "." +
    now.getFullYear();

main.innerHTML += "Текущая дата-время: " + formattedDate;

