const count_necklace = (word) => {
    if (word === "") {
        return 1;
    }
    let times_number = 0;
    let word_array = Array.from(word);
    let iterator = 0;

    while (iterator < word.length) {
        let current_charater = word_array[0];
        word_array.shift();
        word_array.push(current_charater);
        let standar_array = Array.from(word);
        if (standar_array.length === word_array.length && word_array.every((value, index) => value === standar_array[index])) {
            times_number++;
        }

        iterator++;
    }
    return times_number;
};
const word = "";


console.log(`count_necklace('${word}') => ${count_necklace(word)}`);


