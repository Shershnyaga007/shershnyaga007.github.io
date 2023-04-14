let a = prompt('Введите а:');
a = parseInt(a)
if (a === 0 || a === 3) {
    a += 6;
} else {
    a /= 100;
}

alert(a);

location.href = './index.html'