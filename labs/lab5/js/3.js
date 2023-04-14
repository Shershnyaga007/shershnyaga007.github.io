let number, text;
do {
    number = parseInt(prompt("Введите число от 15 до 90:"));
    text = prompt("Введите текст длиной не менее 10 символов:");
} while ((isNaN(number) || number < 15 || number > 90) || (typeof text !== 'string' || text.length < 10));

location.href='./index.html'