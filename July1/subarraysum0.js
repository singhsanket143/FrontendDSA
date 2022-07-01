function checkSubarrayWithSum0(arr) {
    /**
     * Time: O(n^2) Space: O(1)
     */
    // we try to generate all possible aubarrays
    for(let start = 0; start < arr.length; start++) {
        let sum = 0;
        for(let end = start; end < arr.length; end++) {
            sum += arr[end]; 
            if(sum == 0) return true;
        }
    }
    return false;
}

console.log(checkSubarrayWithSum0([5,2,1,-3]));