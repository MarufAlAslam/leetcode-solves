function rectArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2){
    return (
        (Math.pow(bx2-bx1, 2) + Math.pow(by2-by1, 2)) / 2
    );
}

console.log(rectArea(-3, 0, 3, 4, 0, -1, 9, 2));
console.log(rectArea(-2, -2, 2, 2, -2, -2, 2, 2));