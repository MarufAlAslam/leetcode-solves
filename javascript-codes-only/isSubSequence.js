function isSubsequence(s, t) {
    let i = 0
    let j = 0
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++
        }
        j++
    }
    return i === s.length
}

console.log(isSubsequence('', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))
console.log(isSubsequence('acb', 'ahbgdc'))