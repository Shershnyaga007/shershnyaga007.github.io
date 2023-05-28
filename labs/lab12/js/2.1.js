let popup = document.querySelectorAll('.popup')[0];
const closeButton = document.getElementById('closeButton');

function removePopup() {
    popup.classList.add('hidden');
}

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 500) {
        popup.classList.remove('hidden');
    } else {
        popup.classList.add('hidden');
    }
});