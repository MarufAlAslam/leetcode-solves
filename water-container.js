function waterContainer(heights) {
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            let area = (j - i) * Math.min(heights[i], heights[j]);
            if (area > maxArea) {
                maxArea = area;
            }
        }
    }
    return maxArea;
}

console.log(waterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));