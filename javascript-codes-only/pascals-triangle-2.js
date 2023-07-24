function pascalsTriangle(n){
    const res = [[1]]
    for(let i = 1; i <= n; i++){
        res[i] = [1, ...res[i-1].map((v, i, arr) => arr[i+1] ? arr[i] + arr[i+1] : 1)]
    }
    return res[n]
}


console.log(pascalsTriangle(3))