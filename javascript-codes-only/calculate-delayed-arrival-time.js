function calculateDelayed(arrTime, DelTime){
    return (arrTime + DelTime) % 24;
}

console.log(calculateDelayed(13, 11)); // 4