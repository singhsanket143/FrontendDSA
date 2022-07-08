let grid = [
    [1,0,0],
    [1,1,1],
    [1,1,1]
];
let visited = [];
for(let i = 0; i < grid.length; i++) {
    let temp = Array(grid[0].length).fill(false);
    visited.push(temp);
}
function f(i, j, m, n) {
    if(i == m-1 && j == n-1) {
        // while travelling we reached the destination
        return 1;
    }
    if(i < 0 || j < 0 || i >= m || j >= m || grid[i][j] == 0 || visited[i][j] == true) {
        /**
         * All of the above cases are unwanted, either they make us go 
         * out of grid, or make us go to a blocked cell or make us go to
         * an already visited, if we reach in any one of the situation 
         * we return 0, as there will no path from a position like this
         */
        return 0;
    }
    // whenever we will visit a cell we will mark it as visited
    visited[i][j] = true;

    let ans = 0;
    ans += f(i, j+1, m, n); // right
    ans += f(i+1, j, m, n); // down
    ans += f(i, j-1, m, n); // left
    ans += f(i-1, j, m, n); // up
    // backtrack
    // irrespective of the fact we found a solution or not we will revert the change
    visited[i][j] = false;
    return ans;
}

console.log(f(0, 0, grid.length, grid[0].length)); // 0,0,3,3