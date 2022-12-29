const caesar = (str, shift) => {
    const last_lowcase_alphabet_ascii_code = 122;
    const total_alphabet_number = 26;
    const count_before_lowercase_charater__a = 96;
    let caesar = "";
    const lowerCaseStr = str.toLocaleLowerCase();

    for (let i = 0; i < lowerCaseStr.length; i++) {
        ascii_code = lowerCaseStr.charCodeAt(i);
        if (ascii_code + shift > last_lowcase_alphabet_ascii_code) {
            diff = last_lowcase_alphabet_ascii_code - ascii_code;
            real_pos = total_alphabet_number - diff;
            caesar_character_pos = (real_pos + shift) % total_alphabet_number;
            caesar = caesar + String.fromCharCode(caesar_character_pos + count_before_lowercase_charater__a);
        } else {
            caesar = caesar + String.fromCharCode(ascii_code + shift)
        }
    }
    console.log(`caesar("${lowerCaseStr}", ${shift}) => "${caesar}"`);
};

caesar("jgorevxumxgsskx", 20);
