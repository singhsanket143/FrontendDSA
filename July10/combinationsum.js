function f(n, arr, output) {
    if(n == 0) {
        console.log(output);
        return 1;
    }
    let ans = 0;
    for(let i = 0; i < arr.length; i++) {
      let k = arr[i];
      if(n-k < 0) continue;
      ans += f(n-k, arr, output + k + " ");
    }
  return ans; 
}

function g(n, arr, output) {
    let a = Array(n+1).fill(0);
    a[0] = 1;
    for(let j = 0; j < arr.length; j++) {
        for(let i = 1; i <= n; i++) {
            if(arr[j] > i) continue;
            a[i] = a[i] + a[i-arr[j]];
        }
    }
    console.log(a)
    return a[n];
}

console.log(g(8, [2,4,6,8], ""))