function targetSumPair(lo, hi, arr, k) {
    // this function gets all the pairs with sum k
    while(lo <= hi) {
        if(arr[lo] + arr[hi] == k) {
            if(arr[lo] == arr[hi]) {
                let count = hi - lo + 1;
                let freq = Math.floor(((count)*(count-1))/2);
                for(let i = 0; i < freq; i++) {
                    console.log(arr[lo], arr[hi], -k);
                }
                break;
            } else {
                let loFreq = 1, hiFreq = 1;
                lo++;
                while(arr[lo] == arr[lo-1]) {
                    lo++;
                    loFreq++;
                }
                hi--;
                while(arr[hi] == arr[hi+1]) {
                    hiFreq++;
                    hi--;
                }
                let countOfPairs = loFreq*hiFreq;
                for(let i = 0; i < countOfPairs; i++) {
                    console.log(arr[lo-1], arr[hi+1], -k);
                }
            }
        }  
        if(arr[lo] + arr[hi] > k) {
            hi--;
        } else if(arr[lo] + arr[hi] < k) {
            lo++;
        }
    }
}

function totalTriplets(arr) {
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++) {
        // we take candidate value for c
        let c = arr[i];
        targetSumPair(i+1, arr.length - 1, arr, -c);
    }
}

totalTriplets([-1,0,1,2,-1,-4]); 