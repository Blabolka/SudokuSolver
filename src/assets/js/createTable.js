const sudokuDiv = document.getElementById('sudoku-div')

const table = document.createElement('table')
table.setAttribute('class', 'sudoku-table')

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