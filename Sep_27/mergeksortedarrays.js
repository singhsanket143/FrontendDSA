function cmp(arr, a, b) { // [idx, row]
    /**
     * arr -> 2d array given with k rows
     * a -> first pair getting into comparison ,ex: [0,1]
     * b -> second pair getting into comparison ,ex: [2,2]
     */
    // console.log(arr[a[1]][a[0]]," , ", arr[b[1]][b[0]]);
    return arr[a[1]][a[0]] > arr[b[1]][b[0]];
}
class MinHeap {
    constructor(comparisonFunction, g) {
        this.comparator = comparisonFunction;
        this.grid = g;
        this.arr = []; // this arrays will store pairs, as we have heap of pairs
    }
    upheapify(idx) {
        /**
         * Time: O(logn) Space: O(1)
         */
        if(this.isEmpty()) return; // if heap is empty
        while(idx > 0) { // we cannot upheapify root, we will stop the loop, when we reach root
            let parentIdx = Math.floor((idx - 1) / 2);
            if(this.comparator(this.grid, this.arr[parentIdx], this.arr[idx])) {
                // console.log(his.arr[parentIdx], " , ", this.arr[idx]);
                // if parent is more than child, swap them
                let temp = this.arr[parentIdx];
                this.arr[parentIdx] = this.arr[idx];
                this.arr[idx] = temp;

                // move upwards
                idx = parentIdx;
            } else {
                // already a min heap
                break;
            }
        }
    }

    downHeapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        if(this.isEmpty()) return; // if heap is empty no need to downheapify
        while(idx < this.arr.length) {
            let left = 2*idx + 1;
            let right = 2*idx + 2;
            let smallest = idx; // initially assume root is the greatest
            if(left < this.arr.length && 
                this.comparator(this.grid, this.arr[smallest], this.arr[left])) {
                // if left child exist and it is greater than root, then greatest is left
                smallest = left;
            }
            if(right < this.arr.length && 
                this.comparator(this.grid, this.arr[smallest], this.arr[right])) {
                // if right child exist and right is greater than max(root, left) then right is greatest
                smallest = right;
            }
            if(smallest == idx) {
                // we dont need to swap and we can stop
                break;
            }
            // swap
            let temp = this.arr[smallest];
            this.arr[smallest] = this.arr[idx];
            this.arr[idx] = temp;
            idx = smallest;
        }
    }

    removeRoot() {
        // swap the root node with last index value
        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr[this.arr.length - 1] = temp;

        this.arr.pop(); // remove the last index element

        this.downHeapify(0);
    }

    insert(x) {
        // this function inserts x correctly in max heap
        this.arr.push(x);
        this.upheapify(this.arr.length - 1); // arr.len - 1 is the index on which x is added
    }

    display() {
        console.log(this.arr);
    }

    getRoot() {
        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length == 0;
    }
}

let grid = [
    [2,7,19,20],
    [3,8,16],
    [1,5,6,10,12],
    [3,4,22]
]


function mergeKsortedArrays(grid) {
    // time O(nklogk) , space O(k)
    let k = grid.length;
    let hp = new MinHeap(cmp, grid);
    for(let i = 0; i < k; i++) {
        // console.log(grid[i][0]);
        hp.insert([0, i]);
    }
    // hp.display();
    let res = [];
    while(!hp.isEmpty()) {
        let root = hp.getRoot();
        // console.log(root);
        res.push(grid[root[1]][root[0]]);
        hp.removeRoot();
        let currRow = root[1];
        let currIdx = root[0];
        if(currIdx + 1 < grid[currRow].length) {
            hp.insert([currIdx+1, currRow]);
        }
    }
    return res;
}

let x = mergeKsortedArrays(grid);
console.log(x);
