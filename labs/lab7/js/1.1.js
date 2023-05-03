let a = +prompt("Введите значение переменной a:");
let b = +prompt("Введите значение переменной b:");

let remainder = a % b;

document.getElementById("main").innerHTML += `<p>Остаток деления a на b: ${remainder}</p>`

if (remainder === 0)
    document.getElementById("main").innerHTML += `<p>Делится без остатка на 0</p>`
else
    document.getElementById("main").innerHTML += `<p>Не делится без остатка на 0</p>`