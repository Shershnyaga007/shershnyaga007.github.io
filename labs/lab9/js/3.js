const p4 = document.getElementById("p3-4")
const z4 = document.getElementById("z3-4")

z4.addEventListener("mouseout", () => {
    p4.style.rotate = "0deg"
})

z4.addEventListener("mouseover", () => {
    p4.style.rotate = "180deg"
})