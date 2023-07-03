/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function uniqueMorseCode(words){
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i].split("")
        for (let j = 0; j < word.length; j++) {
            const index = alphabet.indexOf(word[j])
            word[j] = morseCode[index]
        }
        words[i] = word.join("")
    }

    return [...new Set(words)].length
}