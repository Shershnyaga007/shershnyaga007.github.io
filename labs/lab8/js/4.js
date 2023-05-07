const text = document.querySelectorAll('.content');
text.forEach(function(block) {
    let text1 = block.textContent.trim();
    if (text1.length > 10) {
        text1 = text1.slice(0, 10) + '...';
        block.textContent = text1;
    }
});