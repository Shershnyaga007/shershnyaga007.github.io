const liElements = document.querySelectorAll('li');

liElements.forEach(li => {
    li.addEventListener('click', () => {
        li.remove();
    });
});