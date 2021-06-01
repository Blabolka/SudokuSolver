export function validateSudoku(sudoku) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] !== 0 && !validateField(sudoku, { row: i, col: j }, sudoku[i][j])) {
                return false
            }
        }
    }
    return true
}

function validateField(sudoku, coord, checkedNumber) {
    return checkRow(sudoku, coord, checkedNumber)
        && checkColumn(sudoku, coord, checkedNumber)
        && checkBlock(sudoku, coord, checkedNumber)
}

export function checkRow(sudoku, coord, checkedNumber) {
    for (let i = 0; i < 9; i++) {
        if (coord.col !== i && sudoku[coord.row][i] === checkedNumber) {
            return false
        }
    }
    return true
}

export function checkColumn(sudoku, coord, checkedNumber) {
    for (let i = 0; i < 9; i++) {
        if (coord.row !== i && sudoku[i][coord.col] === checkedNumber) {
            return false
        }
    }
    return true
}

export function checkBlock(sudoku, coord, checkedNumber) {
    const start = [0, 3, 6]
    const end   = [2, 5, 8]
    const rowBlockIndex = Math.floor(coord.row / 3)
    const columnBlockIndex = Math.floor(coord.col / 3)

    for (let i = start[rowBlockIndex]; i <= end[rowBlockIndex]; i++) {
        for (let j = start[columnBlockIndex]; j <= end[columnBlockIndex]; j++) {
            if (i !== coord.row && j !== coord.col && sudoku[i][j] === checkedNumber) {
                return false
            }
        }
    }
    return true
}