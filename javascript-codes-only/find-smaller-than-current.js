function findSmallerThanCurrent(arr) {
    const counterArray = []
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                counter++
            }
        }
        counterArray.push(counter)
        counter = 0
    }
    return counterArray
}

console.log(findSmallerThanCurrent([8, 1, 2, 2, 3]))