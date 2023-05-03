let add = document.querySelector("#add-button");

add.addEventListener("click", function() {
    let p = document.createElement("p")
    let input = document.createElement("input");
    p.appendChild(input)
    document.getElementById("gh").appendChild(p);
});