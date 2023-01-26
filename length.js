function length(str) {
  const arr = str.split(" ");
  const last = arr[arr.length - 1];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== "") {
      return arr[i].length;
    }
  }
}

console.log(length("hello world  man"));
