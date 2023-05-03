const deleteB = document.getElementById('delete-btn');
const olE = document.querySelector('ol');

deleteB.addEventListener('click', () => {
    const lastChild = olE.lastElementChild;
    if (lastChild) {
        olE.removeChild(lastChild);
    }
});