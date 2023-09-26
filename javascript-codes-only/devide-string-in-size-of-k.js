function devideStr(str, k, fill){
    str.split("")
    let arr = []
    for(let i = 0; i < str.length; i = i + k){
        arr.push(str.slice(i, i + k))
        if(arr[arr.length - 1].length < k){
            arr[arr.length - 1] = arr[arr.length - 1].padEnd(k, fill)
        }

    }
    return arr
}

console.log(devideStr("AABCAAADad", 3, "x")); // ["AAB", "CAA", "ADA"]