const input = document.querySelector('#dd');

input.addEventListener('blur', () => {
    alert(input.value.indexOf('3') !== -1)
});