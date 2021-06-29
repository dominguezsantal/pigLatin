let word = "se7en";

const vowelArray = ["a", "e", "i", "o", "u"];

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char);
}

function cleanNonChars(word) {
    word.forEach(function(character) {
        if (!isCharacterALetter(character)) {
            //console.log("CAUGHT YOU " + character);
            word.splice(word.indexOf(character), 1);
        }
    });
    return word;
}

function findVowel(vowelArray, word) {
    let shiftedWord = [];
    word = word.split("");
    firstLetter = word[0];
    word = cleanNonChars(word);

    for (let i = 0; i < vowelArray.length; i += 1) {
        if (firstLetter.toLowerCase() === vowelArray[i]) {
            return word + "way";
        }
    }
    let newWord = "";


    const wordLength = word.length
    if (word[0] === "q" && word[1] === "u") {
        shiftedWord = word.splice(0, 2);
    }

    for (let i = 0; i < wordLength; i++) {
        indexVar = 0;
        firstLetter = word[0];

        if (word[0] === "q" && word[1] === "u") {
            indexVar += 2;
        }
        if (!vowelArray.includes(word[indexVar])) {
            //       console.log(word[indexVar]);
            let firstConsonant = word.shift();
            shiftedWord.push(firstConsonant);
        } else {
            word = word.join("");
            shiftedWord = shiftedWord.join("");
            //  console.log("WORD: " + word + " SHIFTED WORD: " + shiftedWord);
            return word + shiftedWord + "ay"; // want "eakbbbray"
        }
    }
}


newWord = findVowel(vowelArray, word);

console.log(newWord);