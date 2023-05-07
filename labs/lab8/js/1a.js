const input = document.querySelector('#dd');

input.addEventListener('blur', () => {
    const ds = input.value;
    const date = new Date(ds);
    const dow = date.getDay();
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    alert(daysOfWeek[dow])
});