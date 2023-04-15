/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function weakestRows(mat, k) {
    const soldires = []
    const index = []
    let counter = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                counter++
            }
        }
        soldires.push(counter)
        index.push(i)
        counter = 0
    }



    return soldires.map((soldire, i) => {
        return { soldire, index: index[i] }
    }).sort((a, b) => {
        if (a.soldire > b.soldire) {
            return 1
        } else if (a.soldire < b.soldire) {
            return -1
        } else {
            return 0
        }
    }).slice(0, k).map((item) => {
        return item.index
    })

}