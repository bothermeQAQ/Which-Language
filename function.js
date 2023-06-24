const letterFreqs = require("./LetterFrequencyData.js");
const letterList = {};
var text = "ni hao wo shi zhong guo ren";
text = text.toLowerCase().replace(/\s/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','à','â','á','å','ä','ã','ą','æ','œ','ç','ĉ','ć','č','ď','ð','è','é','ê','ë','ę','ě','ĝ','ğ','ĥ','î','ì','í','ï','ı','ĵ','ł','ł','ñ','ń','ň','ò','ö','ô','ó','ő','õ','ø','ř','ŝ','ş','ś','š','ß','ť','þ','ù','ú','û','ŭ','ü','ű','ů','ý','ź','ż','ž'];
const lettersAsObjects = letters.map(letter => ({letter}))
const languages = Object.keys(letterFreqs.a);
//console.log(languages);
//console.log(lettersAsObjects);

const stats = languages.map(language => {
    const letterStats = letters.map(letter => {
        let observed = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i].toLowerCase() === letter) 
            observed++;
        }
        const expected = text.length * letterFreqs[letter][language];
        const difference = (observed - expected) * (observed - expected) / expected;
        return {letter, language, difference};
    })
    const statistic = letterStats.reduce((sum, letterStat) => sum + letterStat.difference, 0);
    return{language, statistic};
});
console.log(stats);
const min = stats.reduce((minObj, stat) => {
    if (minObj === null) {
        return stat;
    } else {
        if (minObj.statistic < stat.statistic) {
            return minObj;
        } else {
            return stat;
        }
    }
}, null);
console.log({min});

