const main = document.getElementById('main');

const now = new Date();

const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

const diffSeconds = Math.floor((now - today) / 1000);

function showSeconds() {
    main.textContent = `Количество секунд с начала дня: ${diffSeconds}`;
}

// Обновляем вывод каждую секунду
setInterval(showSeconds, 1000);