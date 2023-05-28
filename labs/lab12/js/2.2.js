let popup = document.querySelectorAll('.popup')[0];
const closeButton = document.getElementById('closeButton');

function removePopup() {
    popup.classList.add('hidden');
}

setTimeout(() => {
    popup.classList.remove('hidden');
}, 27000)