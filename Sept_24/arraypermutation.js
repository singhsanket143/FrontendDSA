function isArraypermutation(inp, out) {
    let st = [];
    let j = 0;
    for(let i = 0; i < inp.length; i++) {
        st.push(inp[i]);
        while(st.length > 0 && st[st.length - 1] == out[j]) {
            j++;
            st.pop();
        }
    }
    if(st.length > 0) return false;
    return true;
}