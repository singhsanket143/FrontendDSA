class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(data) {
        /**
         * Time: O(1)
         */
        let newNode = new Node(data);
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        return newNode;
    }

    display() {
        /**
         * Time O(n)
         */
        let temp = this.head;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

class LRU {
    constructor(sz) {
        this.dll = new DoublyLL();
        this.mp = {};
        this.sz = sz;
        this.total = 0; // the total number of elements we have
    }

    put(key, value) {
        if(!this.mp[key]) {
            if(this.total < this.sz) {
                let newNode = this.dll.insertAtHead([key, value]);
                this.total++;
                this.mp[key] = newNode;
            } else {
                let prev = this.dll.tail.prev;
                delete this.mp[this.dll.tail.data[0]]
                
                prev.next = null;
                this.dll.tail.prev = null;
                this.dll.tail = prev;
                let newNode = this.dll.insertAtHead([key, value]);
                this.mp[key] = newNode;
            }
            
        } else {
            let keyNode = this.mp[key]; // this is the node where our key value pair is present
            keyNode.data[1] = value; // on every node's data property we have an array 0th -> key 1st -> value
            if(keyNode == this.dll.head) return;
            
            // now shift the node to head

            let prev = keyNode.prev; 
            prev.next = keyNode.next; // 1->2->3 // prev -> 1
            if(keyNode.next != null) {
                keyNode.next.prev = prev;
            }
            keyNode.next = this.dll.head;
            keyNode.prev = null;
            this.dll.head = keyNode;
            if(keyNode == this.dll.tail) this.dll.tail = prev;
        }
    }

    get(key) {
        if(!this.mp[key]) return undefined;
        let keyNode = this.mp[key];
        const ans = keyNode.data[1];
        if(keyNode == this.dll.head) return ans;
        let prev = keyNode.prev; // 4 -> 3 -> 2 , prev = 3, keynode = 2
        // console.log(prev);
        prev.next = keyNode.next; // 
        if(keyNode.next != null) {
            keyNode.next.prev = prev;
        }
        keyNode.next = this.dll.head;
        keyNode.prev = null;
        this.dll.head = keyNode;
        if(keyNode == this.dll.tail) this.dll.tail = prev;
        return ans;
    }

    display() {
        this.dll.display();
    }

}


let cache = new LRU(3);
cache.put(1,"Sanket");
cache.put(2, "Shaik");
cache.put(3, "Sarthak");
cache.put(4, "JD");
// cache.display();
cache.put(2, "Shaik");
cache.display();
console.log(cache.get(2));
cache.put(5, "Pulkit");
console.log(cache.get(1));
cache.display();
console.log(cache.get(2))
cache.put(6, "Tanuj");
cache.display();