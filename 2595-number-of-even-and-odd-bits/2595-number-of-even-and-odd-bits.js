/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    const ans = [0, 0];
    const binary = n.toString(2).split('').reverse();
    
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            if (i % 2) {
                ans[1]++;
            } else {
                ans[0]++;
            }
        }
    }
    
    return ans;
};