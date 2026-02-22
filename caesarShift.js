function caesarShift(string, number) {
    const letters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    const lettersArr = letters.split(" ");

    const stringArr = string.split("");
    const index = [];

    for (let i = 0; i < stringArr.length; i++) {
        const idx = lettersArr.findIndex((letter) => letter == stringArr[i]);
        index.push(idx)
        
    }
    console.log(index);
    
    for (let i = 0; i < number; i++) {
        const first = lettersArr.shift();
        lettersArr.push(first);
    }

    for (let i = 0; i < stringArr.length; i++) {
        stringArr[i] = lettersArr[index[i]];
    }

    return stringArr.join("");
}

console.log(caesarShift('hello world', 3));
module.exports = caesarShift;