class MaxHeap {
    constructor(a) {
        // Time: O(n)
        this.arr = a;
        for(let i = this.arr.length - 1; i >= 0; i--) {
            this.downHeapify(i);
        }
    }
    upheapify(idx) {
        /**
         * Time: O(logn) Space: O(1)
         */
        while(idx > 0) { // we cannot upheapify root, we will stop the loop, when we reach root
            let parentIdx = Math.floor((idx - 1) / 2);
            if(this.arr[parentIdx] < this.arr[idx]) {
                // if parent is less than child, swap them
                let temp = this.arr[parentIdx];
                this.arr[parentIdx] = this.arr[idx];
                this.arr[idx] = temp;

                // move upwards
                idx = parentIdx;
            } else {
                // alread a max heap
                break;
            }
        }
    }

    downHeapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        while(idx < this.arr.length) {
            let left = 2*idx + 1;
            let right = 2*idx + 2;
            let greatest = idx; // initially assume root is the greatest
            if(left < this.arr.length && this.arr[left] > this.arr[greatest]) {
                // if left child exist and it is greater than root, then greatest is left
                greatest = left;
            }
            if(right < this.arr.length && this.arr[right] > this.arr[greatest]) {
                // if right child exist and right is greater than max(root, left) then right is greatest
                greatest = right;
            }
            if(greatest == idx) {
                // we dont need to swap and we can stop
                break;
            }
            // swap
            let temp = this.arr[greatest];
            this.arr[greatest] = this.arr[idx];
            this.arr[idx] = temp;
            idx = greatest;
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
}

let hp = new MaxHeap([3,4,1,7,-1,6,13,20]);
hp.display();
