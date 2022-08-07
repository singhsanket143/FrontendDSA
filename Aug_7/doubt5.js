function gen(x, k) { 
    let ans = x;
    if(x%2 != 0) {
        ans += 2;
    } else {
        ans += 1;
    }
    console.log(ans);
    for(let i = 0; i < k-1; i++) {
        ans += 2;
        console.log(ans);
    }
}

gen(4, 5);