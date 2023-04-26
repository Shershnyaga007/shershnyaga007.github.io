const main = document.getElementById('main');

let i = 10
while (i >= -10) {
    const number = document.createElement("p");
    number.textContent = i;
    main.appendChild(number);
    i--
}

main.appendChild(document.createElement("hr"))

for (let i = 20; i >= -10; i--) {
    const number = document.createElement("p");
    number.textContent = i;
    main.appendChild(number);
}

main.appendChild(document.createElement("hr"))

const array = [1, 2, 3, 4, 5];

let result = 0;

for (let i = 0; i < array.length; i++) {
    // прибавляем текущий элемент к сумме
    result += array[i];
}

main.appendChild(document.createElement("p").textContent = result)
main.appendChild(document.createElement("hr"))

const obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
};

for (let key in obj) {
    const info = document.createElement("p");
    info.textContent = key + " - зарплата " + obj[key] + " долларов.";
    main.appendChild(info);
}

main.appendChild(document.createElement("hr"))