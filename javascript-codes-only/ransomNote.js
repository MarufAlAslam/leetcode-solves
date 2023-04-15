function ransomNote(note, magazine) {
    const noteArr = note.split("");
    const magazineArr = magazine.split("");
    const magazineObj = {};

    magazineArr.forEach((letter) => {
        if (!magazineObj[letter]) magazineObj[letter] = 0;
        magazineObj[letter]++;
    });

    let noteIsPossible = true;
    noteArr.forEach((letter) => {
        if (magazineObj[letter]) {
            magazineObj[letter]--;
            if (magazineObj[letter] < 0) noteIsPossible = false;
        } else noteIsPossible = false;
    });

    return noteIsPossible;
}

console.log(ransomNote("aa", "ab"));
console.log(ransomNote("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));

// "bg"
// "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"