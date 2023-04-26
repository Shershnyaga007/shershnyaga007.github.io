const main = document.getElementById('main');

const date1 = new Date('1988-03-01');
const date2 = new Date();
const diff = date2.getTime() - date1.getTime();
const hours = Math.floor(diff / 3600000);

main.innerHTML += hours;