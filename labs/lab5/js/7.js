let test = false;
if (!test) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

test = true;
if (!test) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

test = false
if (test !== true) {
    alert('Верно');
} else {
    alert('Неверно');
}

test = true;
if (test !== true) {
    alert('Верно');
} else {
    alert('Неверно');
}

location.href = './index.html'