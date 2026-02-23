function caesarShift(string, number) {
    const letters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    const lettersArr = letters.split(" ");

    const split = string.split(" ");

    const final = [];

    for (let i = 0; i < split.length; i++) {
        const stringArr = split[i].split("");
        const index = [];
        const upperCaseIndex = [];
        const chars = [];
        const regex = /[^a-zA-Z0-9\s]/g;



        for (let j = 0; j < stringArr.length; j++) {
            if (regex.test(stringArr[j])) {
                const char = new Char(j, stringArr[j]);
                chars.push(char);
                stringArr.splice(j, 1);
            }
            
        }


        for (let j = 0; j < stringArr.length; j++) {
            if (stringArr[j] === stringArr[j].toUpperCase()) {
                upperCaseIndex.push(j);
                stringArr[j] = stringArr[j].toLowerCase();
            }
            const idx = lettersArr.findIndex((letter) => letter == stringArr[j]);
            index.push(idx);
        }
        
        for (let j = 0; j < number; j++) {
            const first = lettersArr.shift();
            lettersArr.push(first);
        }

        for (let j = 0; j < stringArr.length; j++) {
            stringArr[j] = lettersArr[index[j]];
        }

        for (let j = 0; j < upperCaseIndex.length; j++) {
            stringArr[upperCaseIndex[j]] = stringArr[upperCaseIndex[j]].toUpperCase();
        }

        for (let j = 0; j < chars.length; j++) {
            stringArr.splice(chars[j].index, 0, chars[j].value);
        }

        console.log(index);
        final.push(stringArr.join(""));
    }
    

    let shifted = `${final[0]}`;
    for (let i = 1; i < final.length; i++) {
        shifted += ` ${final[i]}`;
    }

    return shifted;
}

class Char{
    constructor(index, value) {
        this.index = index;
        this.value = value;
    }
}

console.log(caesarShift('HeLLo world!', 3));
module.exports = caesarShift;

