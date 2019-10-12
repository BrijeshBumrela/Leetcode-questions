function uniquePaths(m, n) {
    const dpMatrix = [];
    dpMatrix[0] = new Array(m).fill(1);
    for (let i = 1; i < n; i++) {
        dpMatrix[i] = [];
        dpMatrix[i][0] = 1;
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dpMatrix[i][j] = dpMatrix[i-1][j] + dpMatrix[i][j-1];
        }
    }
    return dpMatrix[n-1][m-1];
}
module.exports = uniquePaths;
