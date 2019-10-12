/**
 * @param {number} n
 * @return {number[][]}
 */
var spiralOrder2 = function(n) {
    let top = 0;
    let left = 0;
    let bottom = n - 1;
    let right = n - 1;
    
    let dir = "right";
    let count = 1;

    const matrixArr = new Array(n);
    for (let i = 0; i < n; i++) {
        matrixArr[i] = new Array(n);
    }

    while(top <= bottom && left <= right) {
            for (let i = left; i <= right; i++) {
                matrixArr[top][i] = count++;
            };   
            top++

            for (let i = top; i <= bottom; i++) {
                matrixArr[i][right] = count++;
            }
            right--;

            for (let i = right; i >= left; i--) {
                matrixArr[bottom][i] = count++;
            }
            bottom--;

            for (let i = bottom; i >= top; i--) {
                matrixArr[i][left] = count++;
            }
            left++;
        }
    return matrixArr;
};

module.exports = spiralOrder2;