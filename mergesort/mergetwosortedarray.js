function merge(A, B) {
    /**
     * Time: O(n+m)
     * Space: O(1) Without considering output space
     */
    let n = A.length;
    let m = B.length;
    let C = Array(n + m);
    let i = 0, j = 0, k = 0;
    // i -> A, j -> B, k -> C
    while(i < n && j < m) {
        if(A[i] < B[j]) {
            C[k] = A[i];
            i++;
            k++;
        } else {
            C[k] = B[j];
            j++;
            k++;
        }
    }
    // if Array A is exhausted first and few elements are left in B
    while (j < m) {
        C[k] = B[j];
        j++;
        k++;
    }
    // If array B is exhausted and few elements are left in A
    while (i < n) {
        C[k] = A[i];
        i++;
        k++;
    }
    return C;
}

let A = [1,5,7,10];
let B = [2,3,9,12,16];
console.log(merge(A, B));
/**
 * [
  1,  2,  3,  5, 7,
  9, 10, 12, 16
]
 */