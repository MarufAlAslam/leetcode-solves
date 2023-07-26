function findPivot(n){
    let pivot = -1;
    for (let i = 1; i<=n; i++){
        let leftSum = 0;
        let rightSum = 0;
        let left = 0;
        let right = 0;
        for(let l = 1; l<=i; l++){
            leftSum = leftSum + l
            left = l
        }

        for(let r = n; r>=i; r--){
            rightSum = rightSum + r
            right = r
        }

        if(left === right && leftSum === rightSum){
            pivot = left
        }
    }

    return pivot
}


console.log(findPivot(4)); // 6