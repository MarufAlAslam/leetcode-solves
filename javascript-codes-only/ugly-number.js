function uglyNumber(n){
    if(n===1){
        return true;
    }
    if(n%2===0){
        return uglyNumber(n/2);
    }
    if(n%3===0){
        return uglyNumber(n/3);
    }
    if(n%5===0){
        return uglyNumber(n/5);
    }
    return 0;
}

console.log(uglyNumber(1)); // 1
