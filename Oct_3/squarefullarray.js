/**
 * @param {number[]} nums
 * @return {number}
 */

 var count = 0;
 function isSquareful(arr) {
     for(let i = 1; i < arr.length; i++) {
         let curr = arr[i];
         let prev = arr[i-1];
         let sumOfAdjacent = curr + prev;
         let sqrt = Math.floor(Math.sqrt(sumOfAdjacent));
         if(sqrt * sqrt != sumOfAdjacent) return false;
     }
     return true;
 }
 function swap(arr, i, j) {
     let temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
 }
 
 function permutation (arr, start) {
     if(start == arr.length) {
         // base case
         if(isSquareful(arr)) {
             count++;
         }
         return
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