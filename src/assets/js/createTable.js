const sudokuDiv = document.getElementById('sudoku-div')

createSudokuTable()
addBorders()

function createSudokuTable() {
    const table = document.createElement('table')
    table.setAttribute('id', 'sudoku-table')

    for (let i = 0; i < 9; i++) {
        const tr = document.createElement('tr')
        tr.setAttribute('class', 'sudoku-row')

        for (let j = 0; j < 9; j++) {
            const td = document.createElement('td')
            td.setAttribute('class', 'sudoku-col')

            const input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.setAttribute('class', 'sudoku-input')

            td.appendChild(input)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

    sudokuDiv.appendChild(table)
}

function addBorders() {
    // table frame border
    document.getElementById('sudoku-table').style.border = '3px solid #000'

    const tableBlocks = document.getElementsByClassName('sudoku-col')

    let lineCounter = 0
    for (let i = 0; i < tableBlocks.length; i++) {
        // vertical border
        if (i % 3 === 0) {
            tableBlocks[i].style.borderLeft = '3px solid #000'
        }

        // horizontal border
        if (i % 9 === 0) {
            lineCounter++
        }
        if (lineCounter % 3 === 0) {
            tableBlocks[i].style.borderBottom = '3px solid #000'
        }
    }
}
