function defineIP(str) {
  return str.replaceAll(".", "[.]");
}

console.log(defineIP("1.1.1.1"));
