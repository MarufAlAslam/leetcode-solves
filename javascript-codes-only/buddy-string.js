function buddyString (s, g){
    if(s.length !== g.length) return false;
    if(s === g && new Set(s).size < s.length) return true;
    let diff = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] !== g[i]) diff.push(i);
        if(diff.length > 2) return false;
    }
    return diff.length === 2 && s[diff[0]] === g[diff[1]] && s[diff[1]] === g[diff[0]];
}

console.log(buddyString('abx', 'ba'));