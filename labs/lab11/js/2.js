const cells = document.querySelectorAll(".cell")
const currentPlayerElem = document.getElementById("currentPlayer")
currentPlayerElem.textContent = `Сейчас ходит: X`
let currentPlayer = 'X'
let firstPlayer = 'X'
let winsX = 0
let wins0 = 0
let draws = 0
cells.forEach(cell => {
    cell.addEventListener("click", cellClick)
})

function cellClick(e) {
    const cell = e.target
    if (cell.textContent !== '')
        return

    cell.textContent = currentPlayer
    if (currentPlayer === 'X')
        currentPlayer = '0'
    else
        currentPlayer = 'X'

    if (checkWinner()) {
        restartGame()

        return;
    }

    currentPlayerElem.textContent = `Сейчас ходит: X`

}

function checkWinner() {
    const win = checkWinnerCombinations()

    if (win === null)
        return false

    alert(`${win} победил!`)

    if (win === 'X') {
        winsX = winsX + 1
        document.getElementById('winx').textContent = `Побед X: ${winsX}`
    }
    else {
        wins0 = wins0 + 1
        document.getElementById('win0').textContent = `Побед 0: ${wins0}`
    }

    return true
}

function checkWinnerCombinations() {
    const winnerCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    let arrX = []
    let arr0 = []

    for (let i= 0; i < cells.length; i++) {
        if (cells[i].textContent === '')
            continue

        if (cells[i].textContent === 'X')
            arrX.push(i)
        else if (cells[i].textContent === '0')
            arr0.push(i)
    }

    for (let i = 0; i < winnerCombinations.length; i++) {
        if (containsAllElements(arrX, winnerCombinations[i]))
            return 'X'
        else if (containsAllElements(arr0, winnerCombinations[i])) {
            return '0'
        }
    }

    if (arrX.length + arr0.length === 9) {
        alert("Ничья!")
        draws = draws + 1
        document.getElementById('draw').textContent = `Ничей: ${draws}`
        restartGame()
    }

    return null
}

function restartGame() {
    if (firstPlayer === 'X')
        firstPlayer = '0'
    else
        firstPlayer = 'X'

    currentPlayer = firstPlayer

    cells.forEach(cell => {
        cell.textContent = ''
    })

    currentPlayerElem.textContent = `Сейчас ходит: X`
}

function containsAllElements(arr1, arr2) {
    return arr2.every(function(element) {
        return arr1.includes(element);
    });
}