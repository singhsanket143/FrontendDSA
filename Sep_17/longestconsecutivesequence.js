/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0;
    let freq = {};
    for(let i = 0; i < nums.length; i++) {
        if(!freq[nums[i]]) freq[nums[i]] = 1;
        else freq[nums[i]]++;
    }
    let ans = 1;
    for(let i = 0; i < nums.length; i++) {
        // check can nums[i] become start of a sequence
        if(freq[nums[i] - 1]) continue;
        // nums[i] is the start point
        // check the max length sequence it can generate
        let len = 0;
        let el = nums[i];
        while(freq[el]) {
            el++;
            len++;
        }
        ans = Math.max(ans, len);
    }
    return ans;
};