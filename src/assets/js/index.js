import { validateSudoku } from "./utils/validator.js";
import { solveSudoku } from "./utils/solver.js";
import { collectInfoFromInputFields } from "./utils/input.js";

const solveButton = document.getElementById('solve-button')
const clearButton = document.getElementById('clear-button')

solveButton.addEventListener('click', solveInputFieldsSudoku)
clearButton.addEventListener('click', clearInputFields)

function solveInputFieldsSudoku() {
    const sudokuInputFields = document.getElementsByClassName('sudoku-input')
    const sudoku = collectInfoFromInputFields()

    if (validateSudoku(sudoku)) {
        const solvedSudoku = solveSudoku(sudoku)

        for (let i = 0; i < solvedSudoku.length; i++) {
            for (let j = 0; j < solvedSudoku[i].length; j++) {
                sudokuInputFields[i * 9 + j].value = solvedSudoku[i][j]
            }
        }
    } else {
        alert('Enter correct sudoku!')
    }
}

function clearInputFields() {
    const sudokuInputFields = document.getElementsByClassName('sudoku-input')

    for (const inputField of sudokuInputFields) {
        inputField.value = ''
    }
}
