const deleteE = document.getElementById('delete-btn');
const childE = document.getElementById('child');

deleteE.addEventListener('click', () => {
    childE.remove();
});