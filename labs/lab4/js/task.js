const mainElement = document.getElementById('content-main');

const task1Button1 = document.getElementById('task1a');
const task1Button = document.getElementById('task1');
const task2Button = document.getElementById('task2');
const task3Button = document.getElementById('task3');
const task4Button = document.getElementById('task4');
const task5Button = document.getElementById('task5');
const task6Button = document.getElementById('task6');
const task7Button = document.getElementById('task7');
const task8Button = document.getElementById('task8');
const task9Button = document.getElementById('task9');
const task10Button = document.getElementById('task10');
const task11Button = document.getElementById('task11');
const task12Button = document.getElementById('task12');
const task13Button = document.getElementById('task13');
const task14Button = document.getElementById('task14');
const task15Button = document.getElementById('task15');
const task16Button = document.getElementById('task16');

const str1 = 'Привет, '
const name = 'Рома'
const age = 18
task1Button1.addEventListener('click', () => {
    mainElement.innerHTML = '';
    const num = 17;
    alert(num);
})

task1Button.addEventListener('click', () => {
    const str = 'Привет, мир!'
    mainElement.innerHTML = `${str}`;
})

task2Button.addEventListener('click', () => {
    const str2 = 'мир!'
    mainElement.innerHTML = `${str1 + str2}`;
})

task3Button.addEventListener('click', () => {
    mainElement.innerHTML = `${str1 + name}!`;
})

task4Button.addEventListener('click', () => {
    mainElement.innerHTML = `Мне ${age} лет!`;
})

task5Button.addEventListener('click', () => {
    mainElement.innerHTML = ``;

    const name = prompt('Введите ваше имя:');
    alert(name)
})

task6Button.addEventListener('click', () => {
    mainElement.innerHTML = ``;

    let number = prompt('Введите число:');

    while (isNaN(number) || number === '') {
        alert('Это не число!')
        number = prompt('Введите число:');
    }
    alert(number * number)
})

task7Button.addEventListener('click', () => {
    const str = 'abcde'
    mainElement.innerHTML = `
        <p>${str[0]}</p>
        <p>${str[2]}</p>
        <p>${str[4]}</p>`;
})

task8Button.addEventListener('click', () => {
    const num = `${6*1000+(21 - 6) * 10}`;
    let num1 = 1;
    for (let i=0; i < num.length; i++) {
        num1 *= num[i];
    }

    mainElement.innerHTML = `<p>${num1}</p>`
})

task9Button.addEventListener('click', () => {
    mainElement.innerHTML = ``;
    const arr = ['a', 'b', 'c'];
    alert(arr);
})

task10Button.addEventListener('click', () => {
    const arr = ['a', 'b', 'c'];
    let inner = ``;
    arr.forEach((e) => {
        inner += `<p>${e}</p>`
    })

    mainElement.innerHTML = inner
})

task11Button.addEventListener('click', () => {
    const arr = ['a', 'b', 'c', 'd'];
    mainElement.innerHTML = `${arr[0] + arr[1]}, ${arr[2] + arr[3]}`
})

task12Button.addEventListener('click', () => {
    const arr = [2, 5, 3, 9]
    const result = (arr[0] * arr[1]) + (arr[2] * arr[3])
    mainElement.innerHTML = `<p>${result}</p>`
})

task13Button.addEventListener('click', () => {
    const obj = {a: 1, b: 2, c: 3};

    mainElement.innerHTML = `
        <p>${obj['a']}</p>
        <p>${obj.a}</p>`
})

task14Button.addEventListener('click', () => {
    const obj = {Коля: '1000', Вася: '500', Петя: '200'};
    mainElement.innerHTML = `
        <p>${obj["Петя"]}</p>
        <p>${obj["Коля"]}</p>`
})

task15Button.addEventListener('click', () => {
    const obj = {
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
        7: 'Воскресенье'
    };

    const date = new Date();
    const day = date.getDay();

    mainElement.innerHTML = `<p>${obj[day]}</p>`
})

task16Button.addEventListener('click', () => {
    const obj = {
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
        7: 'Воскресенье'
    };

    const date = new Date();
    const day = date.getDay();

    mainElement.innerHTML = `<p>${obj[day]}</p>`
})