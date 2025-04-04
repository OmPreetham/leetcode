/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let newMapS = new Map();

    for(let i = 0; i < s.length; i++) {
        newMapS.set(s[i], (newMapS.get(s[i]) || 0) + 1);
    }

    for (let j = 0; j < t.length; j++) {
        if (!newMapS.has(t[j]) || newMapS.get(t[j]) === 0) {
            return t[j];
        }
        newMapS.set(t[j], newMapS.get(t[j]) - 1);
    }
};
