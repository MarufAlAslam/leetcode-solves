function findDIff(s, t) {
    const splittedS = s.split('')

    for (let i = 0; i < splittedS.length; i++) {
        if (t.includes(splittedS[i])) {
            t = t.replace(splittedS[i], '')
        }
    }
    return t
}

console.log(findDIff("ae", "aea")) // e