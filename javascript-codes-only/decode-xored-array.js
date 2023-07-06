function decodeXordedArray(encoded, first) {
    let decoded = [first];
    for (let i = 0; i < encoded.length; i++) {
        decoded.push(encoded[i] ^ decoded[i]);
    }
    return decoded;
}

console.log(decodeXordedArray([1, 2, 3], 1));