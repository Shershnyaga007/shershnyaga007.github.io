const input = document.querySelector('#dd');
document.addEventListener('mouseup', function() {
    const text = window.getSelection().toString();
    if (text !== '') {
        input.value = text;
    }
});