/**
 * @param {number[]} nums
 * @return {number}
 */

 var count = 0;

 function swap(arr, i, j) {
     let temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
 }
 
 function isPairSquareful(a, b) {
     let sum = a+b;
     let sqrt = Math.floor(Math.sqrt(sum));
     return sqrt*sqrt == sum;
 }
 // [10,11,12,13] start = 2 -> 10,11,12,13 , 10,11,13,12
 function permutation (arr, start) {
     if(start == arr.length) {
         // base case
         if(isPairSquareful(arr[start-1], arr[start-2]))
             count++;
         return
     }
     if(start >= 2 && !isPairSquareful(arr[start-1], arr[start-2])) {
         return;
     }
     let visited = {};
     for(let i = start; i < arr.length; i++) {
         if(!visited[arr[i]]) {
             visited[arr[i]] = true;
             swap(arr, i, start);
             permutation(arr, start+1);
             swap(arr, i, start);
         }
         
     }
 }
 
 
 var numSquarefulPerms = function(nums) {
     count = 0;
     permutation(nums, 0);
     return count;
 };