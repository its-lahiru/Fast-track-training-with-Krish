function letterRepetitionCounter(senetence) {
    // create letters array from sentence
    let lettersArray = senetence.replace(/ /g, '').toLowerCase().split('');
    let length = lettersArray.length - 1;
    // use a map to store unique letter keys and its value
    let letters = new Map();

    for (let i = 0; i < length; i++) {
        // check if map already has the letter key
        if (letters.has(lettersArray[i])) {
            // curent letter count
            let letterCount = letters.get(lettersArray[i]);
            // increment current letter count by 1
            letters.set(lettersArray[i], letterCount + 1);
        }
        else
            // enter new letter and letter count set to 1
            letters.set(lettersArray[i], 1);
    }
    // return unique letters and its count
    return [...letters.entries()];
}

module.exports = { letterRepetitionCounter };