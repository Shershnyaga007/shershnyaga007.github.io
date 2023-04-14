const task1Button = document.getElementById('task1-3')
const taskElement = document.getElementById('task')

task1Button.addEventListener('click', () => {
    let position = document.getElementById('task1-1').value
    let fullName = document.getElementById('task1-2').value

    if (fullName.toLowerCase() === 'saul goodman' || position.toLowerCase() === 'lawyer') {
        document.body.innerHTML = `
            <video autoplay width="${window.outerWidth}" height="${window.outerHeight}" loop>
                <source src="./content/goodman.mp4" type="video/mp4">
            </video>
        `
    }
    else if (position.toLowerCase() === 'начальник' || position.toLowerCase() === 'зам. начальника') {
        alert('Добрый день, господин начальник');
    } else if (position.toLowerCase() === 'секретарь') {
        alert(`Добрый день, ${fullName}`);
    } else {
        alert('Вы ввели неправильную должность');
    }
})