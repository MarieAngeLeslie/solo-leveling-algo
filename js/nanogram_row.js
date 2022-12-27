let nb_instance_1 = 0;
let super_array = [];
const nanogram_row = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 1 || array[i] < 0) {
            throw new Error('your array is not valid');
        }
    }
    for (let i = 0; i < array.length; i++) {

        if (array[i] != 0) {
            nb_instance_1 += 1;
            if (typeof array[i + 1] === 'undefined') {
                super_array.push(nb_instance_1);
            }
            if (typeof array[i + 1] != 'undefined' && array[i + 1] === 0) {
                super_array.push(nb_instance_1);
                nb_instance_1 = 0;
            }
        } else {
            continue;
        }

    }
};
let _array = [1, 1, 0, 1, 0, 0, 0, 0, 0];
nanogram_row(_array);
console.log(_array);
console.log('result of nanogram :');
console.log(super_array);

