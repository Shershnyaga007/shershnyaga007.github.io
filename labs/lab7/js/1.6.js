let a = +prompt("Введите значение переменной a:");
let b = +prompt("Введите значение переменной b:");

document.getElementById("main").innerHTML += `<p>${Math.abs(a-b)}</p>`