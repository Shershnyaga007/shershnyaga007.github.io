const main = document.getElementById('main');

const minutesSince1970 = Math.floor(new Date().getTime() / 60000);
main.innerHTML += minutesSince1970;

