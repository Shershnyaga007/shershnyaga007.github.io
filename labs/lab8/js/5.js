const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function fillDays() {
    const selectedMonth = parseInt(monthSelect.value);
    const selectedYear = parseInt(yearSelect.value);
    let daysCount;

    switch (selectedMonth) {
        case 2:
            daysCount = isLeapYear(selectedYear) ? 29 : 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysCount = 30;
            break;
        default:
            daysCount = 31;
            break;
    }

    daySelect.innerHTML = "";

    for (let i = 1; i <= daysCount; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }

    const selectedDay = parseInt(daySelect.value);
    if (selectedDay > daysCount) {
        daySelect.value = "";
    }
}

function fillYears() {
    yearSelect.innerHTML = "";

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }
}

for (let i = 1; i <= 12; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    monthSelect.appendChild(option);
}

fillYears();

monthSelect.addEventListener("change", fillDays);
yearSelect.addEventListener("change", fillDays);

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    const selectedDay = parseInt(daySelect.value);
    const selectedMonth = parseInt(monthSelect.value);
    const selectedYear = parseInt(yearSelect.value);

    let isDateValid = true;
    if (selectedMonth === 2) {
        if (isLeapYear(selectedYear)) {
            isDateValid = selectedDay <= 29;
        } else {
            isDateValid = selectedDay <= 28;
        }
    } else if ([4, 6, 9, 11].includes(selectedMonth)) {
        isDateValid = selectedDay <= 30;
    } else {
        isDateValid = selectedDay <= 31;
    }

    if (!isDateValid) {
        alert("Выбрана некорректная дата!");
        event.preventDefault();
    }
});