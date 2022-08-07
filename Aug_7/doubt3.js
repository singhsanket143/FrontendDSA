function bucketSort(arr) { // implementation to support decimal sorting from 0-1
	let buckets = Array(arr.length);
    for(let i = 0; i < buckets.length; i++) buckets[i] = [];
	for(let i = 0; i < arr.length; i++) {
		let bucketIndex = Math.floor(arr[i]*10);
        // console.log(bucketIndex);
		buckets[bucketIndex].push(arr[i]);
	}
	for(let i = 0; i < buckets.length; i++) {
		buckets[i].sort((a, b) => a-b);
	}
	let output = [];
	for(let i = 0; i < buckets.length; i++) { // n
		for(let j = 0; j < buckets[i].length; j++) {
			output.push(buckets[i][j]);
		}
	}
    return output;
}

console.log(bucketSort([0.21, 0.17, 0.33, 0.18, 0.47]))