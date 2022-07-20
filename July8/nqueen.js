let n = 6; // nxn
let grid = [];
for(let i = 0; i < n; i++) {
    let temp = Array(n).fill('');
    grid.push(temp);
}
function canWePlaceQueen(row, col, n) {
    // not implemented, all we have to do is check vertical and diagnol attacks
    // check vertical
    for(let i = row - 1; i >= 0; i--) {
        if(grid[i][col] == 'Q') {
            // we found a queen sitting vertically above, i.e. current cell is unsafe
            return false;
        }
    }
    // check right diagnol
    for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if(grid[i][j] == 'Q') {
            // we found a queen sitting on the right diagnol, i.e. current cell is unsafe
            return false;
        }
    }
    // check left diagnol
    for(let i = row - 1, j = col-1; i >= 0 && j >= 0; i--, j--) {
        if(grid[i][j] == 'Q') {
            // we found a queen sitting on the left diagnol, i.e. current cell is unsafe
            return false;
        }
    }
    // current cell is safe
    return true;
}

function f(r, n) {
    if(r == n) {
        // we will reach r == n when we have successfully placed the last queen on the last row
        // which means we found one possible way
        console.log(grid);
        return 1;
    }
    // We will try to safely place the current queen on the rth row
    // we will go to every column of the current row and check if we can place the queen
    let ans = 0;
    for(let col = 0; col < n; col++) {
        if(canWePlaceQueen(r, col, n)) {
            grid[r][col] = 'Q'; // place the queen
            ans += f(r+1, n);
            grid[r][col] = ''; // remove the queen
        }
    }
    return ans;
}

console.log(f(0, n));