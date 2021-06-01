import { solveSudoku } from "./utils/solver.js";

const solveButton = document.getElementById('solve-button')
const clearButton = document.getElementById('clear-button')

solveButton.addEventListener('click', solveInputFieldsSudoku)
clearButton.addEventListener('click', clearInputFields)

function solveInputFieldsSudoku() {
    const sudokuInputFields = document.getElementsByClassName('sudoku-input')

    const sudoku = []
    let sudokuRow = []

    for (const inputField of sudokuInputFields) {
        if (inputField.value !== '') {
            sudokuRow.push(Number.parseInt(inputField.value))
        } else {
            sudokuRow.push(0)
        }

        if (sudokuRow.length === 9) {
            sudoku.push(sudokuRow)
            sudokuRow = []
        }
    }

    const solvedSudoku = solveSudoku(sudoku)

    for (let i = 0; i < solvedSudoku.length; i++) {
        for (let j = 0; j < solvedSudoku[i].length; j++) {
            sudokuInputFields[i * 9 + j].value = solvedSudoku[i][j]
        }
    }

}

function clearInputFields() {
    const sudokuInputFields = document.getElementsByClassName('sudoku-input')

    for (const inputField of sudokuInputFields) {
        inputField.value = ''
    }
}
