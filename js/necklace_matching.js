const same_necklace = (word1, word2) => {
    if (word1 === word2) {
        return true;
    }
    let word1_array = Array.from(word1);
    let word2_array = Array.from(word2);
    let iterator = 0;
    while (iterator < word1.length) {
        let current_charater = word1_array[0];
        word1_array.shift();
        word1_array.push(current_charater);
        if (word1_array.length === word2_array.length && word1_array.every((value, index) => value === word2_array[index])) {
            return true;
        }
        
        iterator++;
    }
    return false;
};
const word1 = '';
const word2 = '';

console.log(`same_necklace('${word1}', '${word2}') => ${same_necklace(word1, word2)}`);


