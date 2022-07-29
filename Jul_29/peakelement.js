function peak(arr) {
    let lo = 0, hi = arr.length - 1;
    while(lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(mid-1 >= 0 && mid + 1 < arr.length && arr[mid] > arr[mid+1] && arr[mid] > arr[mid-1]) return mid;
        if(mid + 1 < arr.length && mid - 1 < 0 && arr[mid] > arr[mid+1]) return mid;
        if(mid + 1 >= arr.length && mid - 1 >= 0 && arr[mid] > arr[mid-1]) return mid;
        if(arr[mid] > arr[mid+1]) {
            // we are on a decreasing curve, go left
        } else {
            // we are on a inc curve, go right
        }
    }
}