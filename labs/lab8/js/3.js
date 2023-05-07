const btns = document.querySelectorAll('.btn');
btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        btn.parentNode.parentNode.removeChild(btn.parentNode);
    });
});