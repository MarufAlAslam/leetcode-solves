function isomorphicStrings(s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) return false;
        } else {
            if (Array.from(map.values()).includes(t[i])) return false;
            map.set(s[i], t[i]);
        }
    }
    return true;
}

console.log(isomorphicStrings('abb', 'egg'))