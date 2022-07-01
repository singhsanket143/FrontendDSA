function firstNonRepeating(str) {
    let mp = {};
    for(let i = 0; i < str.length; i++) {
        if(!mp[str[i]]) {
            mp[str[i]] = 1;
        } else {
            mp[str[i]] += 1;
        }
    }
    for(let i = 0; i < str.length; i++) {
        if(mp[str[i]] == 1) {
            return str[i];
        }
    }
    return -1;
}

console.log(firstNonRepeating("aabbcc"));

/**
 * str = level
 * {l:2, e:2, v:1}
 * i = 0, str[i] -> l -> freq - 2
 * i = 1, str[i] -> e -> freq - 2
 * i = 2, str[i] -> v -> freq - 1
 */