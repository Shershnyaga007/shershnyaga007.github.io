let st = Math.pow(6, (21-6))
document.getElementById("main").innerHTML += `<p>st: ${st}</p>`

let a = +prompt("Введите значение переменной a:")

document.getElementById("main").innerHTML += `<p>Корень из ${a} равен ${Math.sqrt(a)}</p>`

//////////////////////////////////////////////////////////////////////
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10000) + 1);
}

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
}

let kkk = Math.sqrt(sum);
document.getElementById("main").innerHTML += `<p>Кв корень суммы кубов: ${kkk}</p>`