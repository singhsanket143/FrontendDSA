let grid = [];
let n = 5;
for(let i = 0; i < n; i++) {
    let temp = Array(n).fill(-1);
    grid.push(temp);
}


function f(i, j, c) {
    // base case
    if(i < 0 || j < 0 || i >= n || j >= n || grid[i][j] != -1) {
        // then either the cell is outside or already visited
        return;
    }
    if(c == n*n - 1) {
        // we have completed the tour , last step
        grid[i][j] = c;
        let str = "";
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                str += grid[i][j] + " ";
            }
            str += "\n";
        }
        console.log(str);
        console.log("******");
        grid[i][j] = -1;
        return;
    }

    grid[i][j] = c; // set the state
    f(i+1, j+2, c+1);
    f(i+2, j+1, c+1);
    f(i-1, j+2, c+1);
    f(i-2, j+1, c+1);
    f(i+1, j-2, c+1);
    f(i+2, j-1, c+1);
    f(i-1, j-2, c+1);
    f(i-2, j-1, c+1);
    grid[i][j] = -1; // revert the state
}

f(0, 0, 0);