/**
 * @param {string} s
 * @return {boolean}
 */
class Stack {
    #arr;
    constructor() {
        this.#arr = [];
    }

    push(x) {
        /**
         * Time: O(1)
         */
        this.#arr.push(x); // add an element to the last
    }
    
    pop() {
        /**
         * Time: O(1)
         */
        this.#arr.pop(); // remove element from last index
    }

    isEmpty() {
        return this.#arr.length == 0;
    }

    top() {
        /**
         * Time: O(1)
         */
        return this.#arr[this.#arr.length - 1]; // return the element at the last index
    }
}

var isValid = function(s) {
    /**
     * Time: O(n)
     * Space: O(n) -> [[[[
     */
    let st = new Stack();
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(' || s[i] == '{' || s[i] == '[') st.push(s[i]);
        else {
            if(st.isEmpty()) {
                if(s[i] == ')' || s[i] == ']' || s[i] == '}') return false;
            }
            if(s[i] == ')' && !st.isEmpty()) {
                if(st.top() == '(') st.pop();
                else return false;
            }
                
            if(s[i] == ']' && !st.isEmpty()) {
                if(st.top() == '[') st.pop();
                else return false;
            }
            if(s[i] == '}' && !st.isEmpty()) {
                if(st.top() == '{') st.pop();
                else return false;
            }
            
        }
    }
    return st.isEmpty();
};