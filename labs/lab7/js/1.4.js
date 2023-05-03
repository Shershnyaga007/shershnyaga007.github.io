let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10000) + 1);
}

let min = arr[0];
let max = arr[0];
for (let i=1; i < 10; i++) {
    if (arr[i] < min)
        min = arr[i]
    if (arr[i] > max)
        max = arr[i]
}

document.getElementById("mian").innerHTML += `
    <p>min: ${min}</p>
    <p>max: ${max}</p>
`