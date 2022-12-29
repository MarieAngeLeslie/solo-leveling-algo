let previous_sequence = "";
let alphabet = 97;
let iterator = 0;
while (iterator != 26) {
    let real_alphabet = String.fromCharCode(alphabet);
    previous_sequence = previous_sequence + real_alphabet + previous_sequence;
    alphabet++;
    iterator++;
    console.log(previous_sequence);


    // Print one character in single line
    // for (let i = 0; i < previous_sequence.length; i++) {
    //      console.log(previous_sequence[i]);
    //      console.log('\n');
    // }
    // TAKING TOO TOO MUCH TIME FOR EXECUTION
}