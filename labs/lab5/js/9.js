let num = prompt('Введите num');
num = parseInt(num)
let result;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
    default:
        result = 'неправильное значение';
        break;
}

alert(result);
location.href = './index.html'