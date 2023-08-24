function goatLatin(sentence){
    let splittedSentence = sentence.split(" ")
    for(let i = 0 ; i<splittedSentence.length; i++){
        if(
            splittedSentence[i][0] === 'a' ||
            splittedSentence[i][0] === 'A' ||
            splittedSentence[i][0] === 'e' ||
            splittedSentence[i][0] === 'E' ||
            splittedSentence[i][0] === 'i' ||
            splittedSentence[i][0] === 'I' ||
            splittedSentence[i][0] === 'o' ||
            splittedSentence[i][0] === 'O' ||
            splittedSentence[i][0] === 'u' ||
            splittedSentence[i][0] === 'U'
        ){
            splittedSentence[i] += "ma"
        }
        else{
            splittedSentence[i] = splittedSentence[i].slice(1) + splittedSentence[i][0] + "ma"
        }
        for(let j = 0; j<=i; j++){
            splittedSentence[i] += "a"
        }
    }
    return splittedSentence.join(" ")
}

console.log(goatLatin("I speak Goat Latin")) // 1