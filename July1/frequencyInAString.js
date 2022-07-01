function getFrequency(str) {
    let mp = {}; // this object will store the frequencies
    for(let i = 0; i < str.length; i++) {
        if(!mp[str[i]]) {
            // if the current char is not present in my mapping, we make an entry
            mp[str[i]] = 1;
        } else {
            // if the char is already present, increase the frequency 
            mp[str[i]] += 1;
        }
    }
    return mp;
}

console.log(getFrequency("546211"));