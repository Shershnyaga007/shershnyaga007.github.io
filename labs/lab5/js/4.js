let res = [];

for (let i = 2; i <= 100; i++) {
    if (i % 3 === 1 && i % 17 === 1) {
        res.push(i);
    }
}

res.forEach((e) => {
    document.getElementById('task').innerText = `${e}, `;
})