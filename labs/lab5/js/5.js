let time = prompt("Введите время в формате чч:мм");

let h = parseInt(time.split(':')[0]);

switch(true) {
    case h >= 7 && h < 12:
        alert("Утро");
        break;
    case h >= 12 && h < 17:
        alert("День");
        break;
    case h >= 17 && h < 21:
        alert("Вечер");
        break;
    case h > 21 || (h >=0 && h < 7):
        alert("Ночь");
}

location.href='./index.html'