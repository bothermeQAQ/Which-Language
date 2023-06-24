const letters = [
    {letter: 'a'},
    {letter: 'b'},
    {letter: 'c'},
    {letter: 'd'},
    {letter: 'e'},
    {letter: 'f'},
    {letter: 'g'},
    {letter: 'h'},
    {letter: 'i'},
    {letter: 'j'},
    {letter: 'k'},
    {letter: 'l'},
    {letter: 'm'},
    {letter: 'n'},
    {letter: 'o'},
    {letter: 'p'},
    {letter: 'q'},
    {letter: 'r'},
    {letter: 's'},
    {letter: 't'},
    {letter: 'u'},
    {letter: 'v'},
    {letter: 'w'},
    {letter: 'x'},
    {letter: 'y'},
    {letter: 'z'},
    {letter: 'à'},
    {letter: 'â'},
    {letter: 'á'},
    {letter: 'å'},
    {letter: 'ä'},
    {letter: 'ã'},
    {letter: 'ą'},
    {letter: 'æ'},
    {letter: 'œ'},
    {letter: 'ç'},
    {letter: 'ĉ'},
    {letter: 'ć'},
    {letter: 'č'},
    {letter: 'ď'},
    {letter: 'ð'},
    {letter: 'è'},
    {letter: 'é'},
    {letter: 'ê'},
    {letter: 'ë'},
    {letter: 'ę'},
    {letter: 'ě'},
    {letter: 'ĝ'},
    {letter: 'ğ'},
    {letter: 'ĥ'},
    {letter: 'î'},
    {letter: 'ì'},
    {letter: 'í'},
    {letter: 'ï'},
    {letter: 'ı'},
    {letter: 'ĵ'},
    {letter: 'ł'},
    {letter: 'ľ'},
    {letter: 'ñ'},
    {letter: 'ń'},
    {letter: 'ň'},
    {letter: 'ò'},
    {letter: 'ö'},
    {letter: 'ô'},
    {letter: 'ó'},
    {letter: 'ő'},
    {letter: 'õ'},
    {letter: 'ø'},
    {letter: 'ř'},
    {letter: 'ŝ'},
    {letter: 'ş'},
    {letter: 'ś'},
    {letter: 'š'},
    {letter: 'ß'},
    {letter: 'ť'},
    {letter: 'þ'},
    {letter: 'ù'},
    {letter: 'ú'},
    {letter: 'û'},
    {letter: 'ŭ'},
    {letter: 'ü'},
    {letter: 'ű'},
    {letter: 'ů'},
    {letter: 'ý'},
    {letter: 'ź'},
    {letter: 'ż'},
    {letter: 'ž'},

];
for (const property in letterFreqs) {
    var letter = property;
    console.log(`${property}: ${letterFreqs[property]}`);
    letterList[letter] = 0;
}

// console.log(`letterList is: ${type(letterList)}`)

//go through the text and count the number of times each letter appears and add it to letterList
for (let i = 0; i < text.length; i++) {
    var letter = text[i].toLowerCase();
    letterList[letter]++;
}

letters.forEach(letter => letter.count = letterList[letter.letter]);

letters.forEach(letter => letter.frequency = letter.count / text.length);

letters.forEach(letter => {
    let sum = 0
    for(let key in letterFreqs[letter.letter]){
        let numerator = Math.pow(letter.frequency - letterFreqs[letter.letter][key], 2)
        sum += numerator / letterFreqs[letter.letter][key]
    }
    letter.fit1 = sum
});

letters.forEach(letter => {
    const languagedata = [];
    for(let key in letterFreqs[letter.letter]){
        languagedata.push(letterFreqs[letter.letter][key])
    }
    letter.language = languagedata
});

const sumOfFit = letters.reduce((sum, letter) => sum + letter.fit1, 0);

console.log(sumOfFit);
console.log(letters);

console.log(bestFit);
console.log(letterFreqs[letter.letter]);

if(typeof letterFreqs[letter.letter] === "undefined"){
   console.log(letterFreqs[letter.letter] + " is undefined");
}

