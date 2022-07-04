function f1(n) {
    console.log("Inside function f1"); // constant
    for(let i = 0; i < n; i++) {  // 1. 3 , 2. 3, 3. 3, 4. 3 .......... 
        console.log(i);
    }
}

// Total operations in the for loops is 3n + 1;
// Tc = O(n)

function f2(n) {
    console.log("Inside the function f2");
    for(let i = 0; i < Math.log(n); i++) { // total logn iterations
        console.log(i);
    }
}

// Total operations in the loop is 3logn + 1
// Tc = O(logn)

function f3(n, m) {
    for(let i = 0; i < n; i++) { // Total iterations = n
        console.log(i);
    }
    for(let j = 0; j < m; j++) { // Total iterations = m
        console.log(j);
    }
}

// These are not nested for loops 
// TC = O(n+m)

function f4(n, m) {
    for(let i = 0; i < n; i++) { // total iterations for this outer for loop is n
        for(let j = 0; j < m; j++) { // total iterations for this inner for loop is m
            console.log(i, j);
        }
    }
}
// i = 0, m
// i = 1, m
// i = 2, m
// .....
// i = n-1, m

// Nested loop
// O(nm)

function f4(n) {
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            console.log(i, j);
        }
    }
}
/*
i = 0, j => n-2 iterations
i = 1, j => n-3 iterations
i = 2, j => n-4 iterations
i = 3, j => n-5 iterations
i = 4, j => n-6 iterations
i = 5, j => n-7 iterations
...
i = n-1, j => 0 iterations

Total iterations: (n-2) + (n-3) + (n-4) ...... + 2 + 1 + 0
Sum of first n-2 natural numbers => ( (n-2)*(n-1) )/2
*/
// O(n^2)

function f5(n) {
    for(let i = 0; i < n; i++) {
        let j = i+1;
        while(j < n) {
            console.log(j);
            j++;
        }
    }
}

// O(n^2)

function f6(n) {
    while(n > 0) {
        console.log(n);
        n = n / 2;
    }
}

/*
0th iteration -> n -> n/(2^0)
1st iteration -> n/2 -> n/2
2nd iteration -> n / 4 -> n/(2^2)
....
kth iteration -> n/(2^k)

Total Iteration = k
Last iteration i.e. k -> n/(2^k) = 1
-> n = 2^k => k = log2n
*/

// O(k) => O(logn)

function f7(n) {
    let i = 1; 
    let pow_of_2 = 1;
    while(i < n) {
        i=pow_of_2;
        pow_of_2*=2;
    }
}

/*
i = 1, pow = 2
i = 2, pow = 4
i = 4, pow = 8
...
i > n -> pow > n
2^k > n
k > logn
*/

// O(logn)

function f8(n) {
    for(let i = 0; i < n; i++) { // total -> n
        for(let j = 0; j < Math.log(n); j++) { // total -> logn
            console.log(i, j);
        }
    }
}

// O(nlogn)
function f9(n) {
    for(let i = 0; i < n; i++) { // total operations -> 4n
        console.log(i);
        console.log("hey", i);
    }
    for(let i = 0; i < n; i++) { // O(n^2)
        for(let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// O(n^2)

function f10(n) {
    for(let i = 0; i < Math.sqrt(n); i++) { // total operations 3*root(n)
        console.log(i);
    }
}
// O(root(n))

function f11(n) {
    for(let i = 0; i*i < n; i++) {
        console.log("Value of i is");
        console.log(i);
        console.log("****");
    }
}

/*
i*i < n;
i^2 < n
i < root(n)
*/

// O(root(n))

function f12(n) {
    let ans = 0;
    for(let i = 1; i < n; i++) { // total iterations -> n-1
        for(let j = n; j > 1; j--) { // total iterations -> n-1
            ans += i;
        }
    }
    return ans;
}

// O(n^2)

function f13(n) {
    for(let i = n; i > 0; i = i/2) {
        for(j = 0; j < i; j++) {
            console.log(i, j);
        }
    }
}

/*
i = n, j -> [0, n) ->   n operations
i = n/2, j -> [0, n/2)->n/2 operations
i = n/4, j -> [0, n/4)->n/4 operations
....
i = 0, j -> [0, 0) (No operation on j)
Total -> n+n/2+n/4+n/8 ..... 
*/

// O(n)

function f14(n) {
    for(let j = 1; j <= n; j++) {
        for(let i = 0; i < n; i = i + j) {
            console.log(i, j);
        }
    }
}

// O(nlogn)

function f15(n) {
    if(n < 10) {
        console.log("Hi");
    } else {
        console.log("By");
    }
}

// O(1)

function f16(n) {
    if(n == 0 || n == 1) {
        return n;
    }
    let a = 0;
    let b = 1;
    for(let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return c;
}
// Omega(1)

function f17(arr, key) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == key) return i;
    }
    return -1;
}

// Omega(1)