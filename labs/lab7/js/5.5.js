const input = document.querySelector('#input');
const cloneBtn = document.querySelector('#cloneBtn');

cloneBtn.addEventListener('click', () => {
    const p = document.createElement("p")
    const input1 = input.cloneNode();
    p.appendChild(input1)
    document.getElementById("gh").appendChild(p);
});