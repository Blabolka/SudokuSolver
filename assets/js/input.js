const inputs = document.querySelectorAll('input[type=text]')

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        input.value = leaveOnlySudokuNumbers(input.value).charAt(0)
    })
})

function leaveOnlySudokuNumbers(someString) {
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
