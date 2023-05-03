let arr = [];

for (let i = 0; i < 11; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

document.getElementById("main").innerHTML += arr