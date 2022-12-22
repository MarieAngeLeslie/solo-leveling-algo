const caesar = (str, shift) => {
    const last_lowcase_alphabet_ascii_code = 122;
    const total_alphabet_number = 26;
    const count_before_lowercase_charater__a = 96;
    let caesar = "";

    for (let i = 0; i < str.length; i++) {
        ascii_code = str.charCodeAt(i);
        if (ascii_code + shift > last_lowcase_alphabet_ascii_code) {
            num1 = last_lowcase_alphabet_ascii_code - ascii_code;
            num2 = total_alphabet_number - num1;
            num = (num2 + shift) % total_alphabet_number;
            caesar = caesar + String.fromCharCode(num + count_before_lowercase_charater__a);
        } else {
            caesar = caesar + String.fromCharCode(ascii_code + shift)
        }
    }
    console.log(`caesar("${str}", ${shift}) => "${caesar}"`);
};

caesar("jgorevxumxgsskx", 20);
