let grid = [
    [3, '.', 6, 5, '.', 8, 4, '.', '.'],
    [5, 2, '.', '.', '.', '.', '.', '.', '.'],
    ['.', 8, 7, '.','.','.','.',3, 1],
    ['.','.',3, '.','1','.','.',8,'.'],
    [9, '.','.', 8, 6, 3, '.','.',5],
    ['.', 5, '.','.',9,'.',6,'.','.'],
    [1,3,'.','.','.','.',2,5,'.'],
    ['.','.','.','.','.','.','.',7, 4],
    ['.','.',5, 2, '.', 6, 3, '.','.']
];

function canWePlace(row, col, num) {
    // check the col
    for(let i = 0; i < 9; i++) {
        if(grid[i][col] == num) return false;
    }
    // cehck the row
    for(let i = 0; i < 9; i++) {
        if(grid[row][i] == num) return false;
    }
    // check the big cell
    let R = Math.floor(row/3);
    let C = Math.floor(col/3);
    for(let i = R*3; i < (R*3) + 3; i++) {
        for(let j = C*3; j < (C*3) + 3; j++) {
            if(grid[i][j] == num) return false;
        }
    }
    return true;
}

function f(r, c) {
    // if we have exhauster the column, go to the next row
    if(c == 9) {
        f(r+1, 0);
        return;
    }
    if(r == 9) {
        // we found a valid sudoku solution
        console.log(grid);
        console.log("*****");
        return;
    }
    if(grid[r][c] == '.') {
        // if the current cell is empty, we will try to fill  it
        for(let num = 1; num <= 9; num++) {
            if(canWePlace(r, c, num)) {
                // if it is safe to place the number we place it
                grid[r][c] = num; // set the state
                f(r, c+1);
                grid[r][c] = '.'; // reset the state
            }
        }
    } else {
        // if the current cell is already filled by a number
        f(r, c+1);
    }
}

f(0, 0);