
const flipfront = (array, n) => {
    let mixed_array = [];

    if (n < 2 && n > array.length) {
        throw new Error(`we can't finish your operation ${n} < 2`);
    }

    for (let number of array) {
        if (typeof number != 'number')
            return console.error("your should contain only value of type : 'number'");
    }

    for (let i = 0; i < n; i++) {
        mixed_array.unshift(array[i]);
    }

    while (typeof array[n] != 'undefined') {
        mixed_array.push(array[n]);
        n++;
    }
    return mixed_array;
};
array = [0, 1, 2, 3, 4];
console.log(array);
console.log(flipfront(array, 3));