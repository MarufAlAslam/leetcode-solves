function goalParser(str) {
  return str.replaceAll("()", "o").replaceAll("(al)", "al");
}

console.log(goalParser("G()(al)"));
