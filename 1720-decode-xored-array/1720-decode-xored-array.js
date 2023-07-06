/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function decodeXordedArray(encoded, first) {
    let decoded = [first];
    for (let i = 0; i < encoded.length; i++) {
        decoded.push(encoded[i] ^ decoded[i]);
    }
    return decoded;
}