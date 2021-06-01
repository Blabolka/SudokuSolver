export function leaveOnlySudokuNumbers(someString) {
    let newString = ''
    for (const character of someString) {
        if (isSudokuNumber(character)) {
            newString += character
        }
    }
    return newString
}

function isSudokuNumber(character) {
    if (character) {
        return character >= '1' && character <= '9'
    } else {
        return false
    }
}

export function collectInfoFromInputFields() {
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

    return sudoku
}