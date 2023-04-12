function counter(n) {
    return function () {
        return n++;
    };
}

console.log(counter(1)());