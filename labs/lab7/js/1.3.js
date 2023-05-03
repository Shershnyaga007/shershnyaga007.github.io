let sqrt = Math.sqrt(111 * 6);

let rounded1 = Math.round(sqrt);
let rounded2 = sqrt.toFixed(1);
let rounded3 = sqrt.toFixed(2);

document.getElementById("main").innerHTML += `
    <p>Результат округления до целых: ${rounded1}</p>
    <p>Результат округления до десятых: ${rounded2}</p>
    <p>Результат округления до сотых: ${rounded3}</p>
    <p>--------------</p>
`

let a = prompt("Введите число: ");
sqrt = Math.sqrt(a);

let result = {
    floor: Math.floor(sqrt),
    ceil: Math.ceil(sqrt)
};

document.getElementById("main").innerHTML += `
    <p>floor: ${result.floor}</p>
    <p>ceil: ${result.ceil}</p>
`