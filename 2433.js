/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    const n = pref.length;
    const arr = new Array(n);
    arr[0] = pref[0];
    for (let i = 1; i < n; i++) {
        arr[i] = pref[i] ^ arr[i - 1];
    }
    return arr;
};
