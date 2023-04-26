let countUpElem = document.getElementById('count-up');
let countUp = 0;
setInterval(function() {
    countUpElem.innerHTML = countUp;
    countUp++;
}, 1000);

let countStopElem = document.getElementById('count-stop');
let countStop = 0;
let countStopInterval;
function startCount() {
    countStopInterval = setInterval(function() {
        countStopElem.innerHTML = countStop;
        countStop++;
    }, 1000);
}
function stopCount() {
    clearInterval(countStopInterval);
}

let clockElem = document.getElementById('clock');
function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    clockElem.innerHTML = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}
function formatTime(time) {
    return (time < 10 ? '0' : '') + time;
}
setInterval(updateClock, 1000);

let timerElem = document.getElementById('timer');
let timerInterval;
function startTimer() {
    let seconds = document.getElementById('timer-input').value;
    let timeLeft = seconds;
    timerInterval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
        } else {
            timeLeft--;
            timerElem.innerHTML = formatTime(Math.floor(timeLeft / 3600)) + ':' + formatTime(Math.floor((timeLeft % 3600) / 60)) + ':' + formatTime(timeLeft % 60);
        }
    }, 1000);
}
function stopTimer() {
    clearInterval(timerInterval);
}

let countdownElem = document.getElementById('countdown');
function updateCountdown() {
    let now = new Date();
    let end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let secondsLeft = Math.floor((end.getTime() - now.getTime()) / 1000);
    countdownElem.innerHTML = Math.floor(secondsLeft / 86400) + ' дней ' + formatTime(Math.floor((secondsLeft % 86400) / 3600)) + ':' + formatTime(Math.floor((secondsLeft % 3600) / 60)) + ':' + formatTime(secondsLeft % 60);
}
setInterval(updateCountdown, 1000);