/**
 * @param {number} millis
 */
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */