function addStrings(str1, str2) {
    let num1 = BigInt(str1);
    let num2 = BigInt(str2);

    return (num1 + num2).toString();
}

console.log(addStrings("11", "123"));