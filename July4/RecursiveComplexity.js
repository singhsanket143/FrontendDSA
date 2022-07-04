function fact(n) {
    // Base case
    if(n == 1) return 1;
    let assume = fact(n-1); // that fact of n-1 is correct
    return n*assume;; // self work
}

// TC = #ofrecursivecalls * Time of one call
// TC = O(n)

function power(a, b) {
    if(b == 0) return 1; // base case
    let assume = power(a, b-1); // assumption
    return a*assume;
}

// TC = O(b)

function friends(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    // let a = friends(n-1); // nth friend goes along
    // let b = friends(n-2); // nth friend makes a pair
    return friends(n-1) + (n-1)*friends(n-2);
}

// O(2^n)

function print_dec(n) {
    // base case
    if(n == 1) {
        console.log(1);
        return;
    }
    console.log(n);
    print_dec(n-1);
}
// TC = O(n)

function tile(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    return tile(n-1) + tile(n-2);
}

// O(2^n)

function f(n) {
    if(n == 1) return 0;
    if(n == 2 || n == 3) return 1;
    let inf = Number.MAX_SAFE_INTEGER;
    return 1 + Math.min((n%3 == 0) ? f(n/3) : inf, (n%2 == 0) ? f(n/2) : inf, f(n-1));
}

// O(3^n)

function isSorted(arr, idx) {
    if(idx == arr.length - 1) {
        return true;
    }
    let assume = isSorted(arr, idx+1);
    return assume && (arr[idx] <= arr[idx+1]);
}

// TC = O(n)

function f(i, j, n, m) {
    // base case
    if(i == n-1 && j == m-1) {
        // found one possible way
        return 1;
    }
    if(i >= n || j >= m) return 0; // if you go outside the grid, there is no possible way
    return f(i, j+1, n, m) + f(i+1, j, n, m);
}

// TC = O(2^(nm))

function f(n) {
    // base case
    if(n == 0) {
        return 1;
    }

    let ans = 0;
    /*
        ans = f(n-1) + f(n-2) + f(n-3) + f(n-4) + f(n-5) + f(n-6)
    */
    for(let k = 1; k <= 6; k++) {
        if(n - k >= 0) {
            ans += f(n-k);
        }
    }
    return ans;
}

// TC = O(6^n)

function f(x, coins) {
    // base case
    if(x == 0) {
        return 0;
    }
    let ans = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < coins.length; i++) {
        if(x-coins[i] >= 0) {
            ans = Math.min(ans, f(x-coins[i], coins));
        }
    }

    return 1+ans;
}

// TC = O(coins_length*(coins_length^x))

function subset(arr, res, i) {
    if(i == arr.length) {
        console.log(res);
        return;
    }
    subset(arr, res + " " + arr[i], i+1);
    subset(arr, res, i+1);
}

// TC = O(2^(arr.length))

