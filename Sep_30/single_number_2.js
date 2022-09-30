/**
 * https://leetcode.com/problems/single-number-ii/
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let bits = Array(40).fill(0);
    for(let i = 0; i < nums.length; i++) {
        // go to each number
        let x = nums[i];
        x = Math.abs(x);
        let j = bits.length - 1;
        while(x > 0) {
            let currBit = x & 1;
            bits[j] += currBit;
            j--;
            x = parseInt(x/2);
        }
    }
    for(let i = 0; i < bits.length; i++) {
        bits[i] = bits[i]%3;
    }
    let result = 0;
    let powOfTwo = 1; // 2^0
    for(let i = bits.length - 1; i >= 0; i--) {
        result += bits[i]*powOfTwo;
        powOfTwo *= 2;
    }
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == result) count++;
    }
    if(count == 1) return result;
    else return -result;
};