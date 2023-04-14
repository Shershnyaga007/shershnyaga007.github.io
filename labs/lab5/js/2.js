const taskElement = document.getElementById('task')
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const minTextLen = 5;
const maxTextLen = 35;

const textLen = randomInt(minTextLen, maxTextLen);

const text1 = prompt(`Введите текст длиной не менее ${textLen} символов:`);

if (text1.length < textLen) {
    taskElement.innerHTML = `
        <p>Введенный текст слишком короткий!</p>
    `
} else {
    const text2 = prompt(`Введите текст длиной меньше ${text1.length} символов:`);

    if (text1.includes(text2)) {
        taskElement.innerHTML = `
        <p>Второй текст встречается в первом тексте!</p>
        `
    } else {
        taskElement.innerHTML = `
        <p>Второй текст не найден в первом тексте.</p>
        `
    }
}