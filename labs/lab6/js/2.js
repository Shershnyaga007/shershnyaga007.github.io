const main = document.getElementById('main');
let n = 500;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

let elem = document.createElement('p')
elem.textContent = "Результат: " + n
main.appendChild(elem)

elem = document.createElement('p')
elem.textContent = "Количество итераций: " + num
main.appendChild(elem)