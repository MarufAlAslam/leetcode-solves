function employee(hours, target){
    let count = 0;
    for (let i = 0 ; i <= hours.length ; i++){
        if(hours[i]>=target){
            count++;
        }
    }

    return count;
}

console.log(employee([5,1,4,2,2], 6))