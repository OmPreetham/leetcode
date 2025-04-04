/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let w1len = word1.length;
    let w2len = word2.length;

    let result = [];

    for (let i = 0; i < Math.max(w1len, w2len); i++) {
        if (i < w1len) {
            result.push(word1[i]);
        }
        
        if (i < w2len) {
            result.push(word2[i]);
        }
    }

    return result.join("");
};
