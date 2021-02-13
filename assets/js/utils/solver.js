export function solveSudoku(sudoku) {
    let currentNumberOfElements = 0
    // set position of mutable items (true -> mutable, false -> immutable)
    const mutableIndexes = sudoku.map((row) => {
        return row.map((rowElement) => {
            if (rowElement) {
                currentNumberOfElements++
                return false
            } else {
                return true
            }
        })
    })

    recursiveSolve(sudoku, mutableIndexes, currentNumberOfElements, {
        row: 0,
        col: 0
    })

    return sudoku
}

let exitStatus = false
function recursiveSolve(sudoku, mutableIndexes, currentNumberOfElements, coord) {

    if (currentNumberOfElements === 81) {
        exitStatus = true
        return
    }

    if (!mutableIndexes[coord.row][coord.col]) {
        recursiveSolve(sudoku, mutableIndexes, currentNumberOfElements, getSudokuNextCellCoord(coord))
        return
    }

    for (let i = 1; i <= 9; i++) {
        if (!exitStatus) {
            if (ableToSet(sudoku, coord, i)) {
                sudoku[coord.row][coord.col] = i
                recursiveSolve(sudoku, mutableIndexes, currentNumberOfElements + 1, getSudokuNextCellCoord(coord))
            }
        } else {
            break
        }
    }

    if (!exitStatus) {
        sudoku[coord.row][coord.col] = 0
    }
}

function getSudokuNextCellCoord(coord) {
    return {
        row: coord.row + Math.floor(coord.col / 8),
        col: (coord.col + 1) % 9
    }
}

function ableToSet(sudoku, coord, checkedNumber) {
    return checkRow(sudoku, coord, checkedNumber)
        && checkColumn(sudoku, coord, checkedNumber)
        && checkBlock(sudoku, coord, checkedNumber)
}

function checkRow(sudoku, coord, checkedNumber) {
    for (let i = 0; i < 9; i++) {
        if (coord.col !== i && sudoku[coord.row][i] === checkedNumber) {
            return false
        }
    }
    return true
}

function checkColumn(sudoku, coord, checkedNumber) {
    for (let i = 0; i < 9; i++) {
        if (coord.row !== i && sudoku[i][coord.col] === checkedNumber) {
            return false
        }
    }
    return true
}

function checkBlock(sudoku, coord, checkedNumber) {
    const start = [0, 3, 6]
    const end   = [2, 5, 8]
    const rowBlockIndex = Math.floor(coord.row / 3)
    const columnBlockIndex = Math.floor(coord.col / 3)

    for (let i = start[rowBlockIndex]; i < end[rowBlockIndex]; i++) {
        for (let j = start[columnBlockIndex]; j < end[columnBlockIndex]; j++) {
            if (i !== coord.row && j !== coord.col && sudoku[i][j] === checkedNumber) {
                return false
            }
        }
    }
    return true
}