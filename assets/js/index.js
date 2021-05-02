import { solveSudoku } from './utils/solver.js'

const notSolvedSudoku = []

// test sudoku data
notSolvedSudoku.push([5,3,0,0,7,0,0,0,0])
notSolvedSudoku.push([6,0,0,1,9,5,0,0,0])
notSolvedSudoku.push([0,9,8,0,0,0,0,6,0])
notSolvedSudoku.push([8,0,0,0,6,0,0,0,3])
notSolvedSudoku.push([4,0,0,8,0,3,0,0,1])
notSolvedSudoku.push([7,0,0,0,2,0,0,0,6])
notSolvedSudoku.push([0,6,0,0,0,0,2,8,0])
notSolvedSudoku.push([0,0,0,4,1,9,0,0,5])
notSolvedSudoku.push([0,0,0,0,8,0,0,7,9])

solveSudoku(notSolvedSudoku)

