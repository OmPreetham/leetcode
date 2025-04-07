/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    let prefixLength = prefix.length;

    for(let i = 1; i < strs.length; i++) {
        let stringToCompare = strs[i];

        while (prefix !== stringToCompare.substring(0, prefixLength)) {
            prefixLength--;

            if (prefixLength === 0) {
                return "";
            }

            prefix = prefix.substring(0, prefixLength);
        }
    }

    return prefix;
};
