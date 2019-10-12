function spiralOrder(matrix) {
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    
    let dir = "right";
    const matrixArr = [];

    if (matrix.length === 0) return [];

    while(top <= bottom && left <= right) {
        if (dir === "right") {
            for (let i = left; i <= right; i++) {
                matrixArr.push(matrix[top][i]);
            };   
            top++
            dir = "bottom";
        }
        else if (dir === "bottom") {
            for (let i = top; i <= bottom; i++) {
                matrixArr.push(matrix[i][right]);
            }
            right--;
            dir = "left";
        }
        else if (dir === "left") {
            for (let i = right; i >= left; i--) {
                matrixArr.push(matrix[bottom][i]);
            }
            bottom--;
            dir = "top";
        }
        else if (dir === "top") {
            for (let i = bottom; i >= top; i--) {
                matrixArr.push(matrix[i][left])
            }
            left++;
            dir = "right";
        }
    }
    return matrixArr;
}

module.exports = spiralOrder;
