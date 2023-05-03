let elem = document.getElementById("elem");
let descendant = elem.getElementsByTagName("*");

for (let i = 0; i < descendant.length; i++) {
    descendant[i].textContent = "!" + descendant[i].textContent;
}