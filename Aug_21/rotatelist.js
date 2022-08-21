var rotateRight = function(head, k) {
    if(head == null) return null;
    if(k == 0) return head;
    let kthFromLeft = head;
    let prev = null;
    let sz = 0;
    let temp = head;
    while(temp != null) {
        temp = temp.next;
        sz++;
    }
    
    k = k%sz;
    for(let i = 1; i < k; i++) {
        kthFromLeft = kthFromLeft.next;
    }
    console.log(kthFromLeft.val, k, sz);
    let a = head;
    let b = kthFromLeft;
    if(k == 0) return head;
    
    while(b.next != null) {
        b = b.next;
        prev = a;
        a = a.next;
    }
    // console.log(a.val)
    
    // a -> kthfrom right b-> tail
    if(prev != null)
        prev.next = null;
    if(b != head) {
        b.next = head;   
    }
    head = a;
    return head;
};