function arraySuffle(arr, n) {
    const arrX = arr.slice(0, n)
    const arrY = arr.slice(n, arr.length)

    const result = []


    for (let i = 0; i < n; i++) {
        result.push(arrX[i])
        result.push(arrY[i])
    }
    return result
}

console.log(arraySuffle([1, 2, 3, 4, 4, 3, 2, 1], 4))
// 1, 4, 2, 3, 3, 2, 4, 1