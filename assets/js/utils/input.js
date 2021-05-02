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