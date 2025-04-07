/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const mappings = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    const stack = [];

    for (let character of s) {
        if (mappings[character]) {
            const topElement = stack.length ? stack.pop() : "#";
            if (topElement !== mappings[character]) {
                return false;
            }
        } else {
            stack.push(character);
        }
    }

    return stack.length === 0;
};
