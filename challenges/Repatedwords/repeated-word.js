function repeatedwords(str) {
    var max = 0;
    var maxword = [];
    var words = str.split(' ');

    for (i = 0; i < words.length; i++) {
        for (j = 0; j < words.length; j++) {
            var count = 0;

            if (i !== j && words[i] === words[j]) {

                count++;
                let word = words[i];
                maxword.push(word);
            }
           
        }
        if (count > maxword) {
            max = count;
            maxword = word;
        }
    }

    return maxword[0];
}

console.log(repeatedwords('hey hello hey hello hello'));



