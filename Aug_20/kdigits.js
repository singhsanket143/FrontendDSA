/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
    if(num.length <= k) return "0";
    if(k == 0) return num;
    let st = []; // stack
    st.push(num[0]);
    for(let i = 1; i < num.length; i++) {
        while(k > 0 && st.length != 0 && num[i] < st[st.length - 1]) {
            k--;
            st.pop();
        }
        st.push(num[i]);
        if(st.length == 1 && num[i] == 0) {
            st.pop();
        }
    }
    
    while(k > 0 && st.length > 0) {
        k--;
        st.pop();
    }
    
    let res = "";
    for(let i = 0; i < st.length; i++) {
        res += st[i];
    }
    if(res.length == 0) return "0";
    return res;
};