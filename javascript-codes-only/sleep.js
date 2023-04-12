async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('Before sleep');