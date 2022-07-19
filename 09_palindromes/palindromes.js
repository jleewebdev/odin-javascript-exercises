const palindromes = function (word) {
    const cleanedText = removePunctuation(word);
    return cleanedText.toLowerCase() === reverseString(cleanedText).toLocaleLowerCase();
};

function reverseString(string) {
    let array = string.split("");
    let output = "";
    for (i = array.length - 1; i >= 0; i--) {
        output += array[i];
    }
    return output;
}

function removePunctuation(string) {
    let punctuationless = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return punctuationless.replace(/\s{2,}/g," ").replace( /\s/g, '');
}

// Do not edit below this line
module.exports = palindromes;
