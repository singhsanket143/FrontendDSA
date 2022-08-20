/**
 * @param {string} s
 * @return {number}
 */
 var minimumDeletions = function(s) {
    let aCount = 0;
    let bCount = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] == 'a') {
            if(bCount == 0) {
                // then this is an initial a, and it doesn't bother us
                continue;
            } else {
                aCount++;
            }
        } else {
            bCount++;
        }
        if(aCount > bCount) {
            aCount = bCount;
        }
    }
    return aCount;
};