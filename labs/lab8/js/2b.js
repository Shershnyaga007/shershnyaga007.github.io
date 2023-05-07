const paragraph = document.querySelector('#pa');
const next = document.querySelector('#next');
const array = ['Ночь многое усложняет.',
    'Ужасное время ночь — слишком поздно для вчера, слишком рано для сегодня...',
    'Ночью иная степень свободы...',
    'Решения, принятые глухой ночью, обычно теряют силу при свете дня.',
    'Ёлы-палы, я променял свой день на ночь, причем по очень херовому курсу.',
    `Ночью у мыслей есть особенность срываться с поводка и гулять на свободе.`];
let index = 0;

function insertNextElement() {
    if (index === array.length) {
        index = 0;
    }
    paragraph.innerHTML = array[index];
    index++;
}

next.addEventListener('click', function(event) {
    event.preventDefault();
    insertNextElement();
});