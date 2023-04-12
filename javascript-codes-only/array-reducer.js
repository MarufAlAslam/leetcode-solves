function arrayReducer(arr, fn, init) {
    let result = init;
    for (let i = 0; i < arr.length; i++) {
        result = fn(result, arr[i]);
    }
    return result;
}

function sum(a, b) {
    return a + b;
}


console.log(arrayReducer([1, 2, 3, 4], sum, 0));