const tasks = document.getElementById("tasks")
const results = document.getElementById("res")

const questions = [
    {
        question: "Вопрос 1: Чи?",
        choices: ["Да!", "Нет!", "Что?", "Ты кто такой?"],
        correctAnswer: 0
    },
    {
        question: "Вопрос 2: Какое самое высокое здание в мире?",
        choices: ["Эйфелева башня", "Башня Шанхай", "Бурдж-Халифа", "Пентагон", "Сиднейская опера"],
        correctAnswer: 2
    },
    {
        question: "Вопрос 3: Какое самое большое озеро в мире?",
        choices: ["Озеро Байкал", "Каспийское море", "Озеро Виктория", "Озеро Мичиган", "Озеро Танганьика"],
        correctAnswer: 1
    }
];

function createTasks() {
    let output = '';

    questions.forEach(function(question, index) {
        let choices = '';

        question.choices.forEach(function(choice, choiceIndex) {
            choices += '<label><input type="radio" name="question' + index + '" value="'+choiceIndex+'">'+choice+'</label><br>';
        });

        output += '<div><strong>' + question.question + '</strong></div>';
        output += choices;
    });

    tasks.innerHTML = output;
    tasks.innerHTML += `<p><input type="button" value="Проверить" onClick="checkAnswers()"></p>`;
}

function checkAnswers() {
    let score = 0;
    let userAnswers = [];

    questions.forEach(function(question, index) {
        let selectedOption = document.querySelector('input[name="question' + index + '"]:checked');

        if (selectedOption) {
            let answerIndex = parseInt(selectedOption.value);
            userAnswers.push(answerIndex);

            if (answerIndex === question.correctAnswer) {
                score++;
            }
        } else {
            userAnswers.push(-1); // -1 для неотвеченных вопросов
        }
    });

    let result = `Вы правильно ответили на ${score} из ${questions.length} вопросов.`;
    result += `<br>Процент правильных ответов: ${(score / questions.length * 100).toFixed(2)}%.`;

    results.innerHTML = result;

    // Выводим отдельно каждый вопрос с указанием правильного ответа
    questions.forEach(function(question, index) {
        let userAnswerIndex = userAnswers[index];
        let userAnswer = userAnswerIndex !== -1 ? question.choices[userAnswerIndex] : 'Не отвечено';
        let correctAnswer = question.choices[question.correctAnswer];

        results.innerHTML += '<hr>';
        results.innerHTML += `${question.question} <br>`;
        results.innerHTML += `Ваш ответ: ${userAnswer} <br>`;
        results.innerHTML += `Правильный ответ: ${correctAnswer} <br>`;
    });
}

createTasks()