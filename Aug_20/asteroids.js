/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
    let st = []; 
    for(let i = 0; i < asteroids.length; i++) {
        let as = asteroids[i];
        let destroyed = false; // this variable tells us whether this asteroid survived the collisions or not
        while(st.length > 0 && st[st.length - 1] > 0 && as < 0 && !destroyed) {
            if(st[st.length - 1] >= -as) destroyed = true;
            if(st[st.length - 1] <= -as) st.pop();
        }
        if(!destroyed) st.push(as);
    }
    return st;
};