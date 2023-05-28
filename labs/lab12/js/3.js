const tabContent = document.getElementsByClassName("tab-content")
const tabLinks = document.getElementsByClassName("tablinks")

function openTab(event, tabName) {
    for (let i = 0; i < tabContent.length; i++)
        tabContent[i].style.display = "none"

    for (let i = 0; i < tabLinks.length; i++)
        tabLinks[i].classList.remove("active")

    document.getElementById(tabName).style.display = "block"
    event.currentTarget.classList.add("active")
}