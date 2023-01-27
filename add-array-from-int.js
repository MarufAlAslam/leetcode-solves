function addArrFromInt(arr, num) {
    const number = BigInt(arr.join('')) + BigInt(num);
    return number.toString().split('').map((item) => BigInt(item));
}

console.log(addArrFromInt([1, 2, 0, 0], 34));
