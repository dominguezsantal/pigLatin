const vowels = ["a", "e", "i", "o", 'u"'];

function vowelCounter(word, text) {
    const textArray = text.split(" ");
    for (let i = 0; i < textArray.length; i++) {
        console.log(i);
        if (word === textArray[i]) {
            return i;
        }
    }
    return -1;
}

//const vowels = ["a", "e", "i", "o", "u"];


function firstInstanceOfWord(word, text) {
    const textArray = text.split(" ");
    for (let i = 0; i < textArray.length; i++) {
        console.log(i);
        if (word === textArray[i]) {
            return i;
        }
    }
    return -1;
}