function maxArea(height) {
    let start = 0;
    let end = height.length - 1;

    let area = 0;
    while (start < end) {
        let startValue = height[start];
        let endValue = height[end];

        let minHeight = Math.min(startValue, endValue);
        let calcArea = minHeight * (end - start);

        area = Math.max(area, calcArea);
        startValue < endValue ? start++ : end--;
    }
    return area;
}

module.exports = maxArea;
