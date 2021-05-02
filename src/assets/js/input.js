import { leaveOnlySudokuNumbers } from './utils/input.js'

const inputs = document.querySelectorAll('input[class=sudoku-input]')

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        input.value = leaveOnlySudokuNumbers(input.value).charAt(0)
    })
})
