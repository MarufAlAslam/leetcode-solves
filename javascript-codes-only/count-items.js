function countItems(items, ruleKey, ruleValue) {
  let count = 0;
  let index = 0;

  if (ruleKey === "type") {
    index = 0;
  } else if (ruleKey === "color") {
    index = 1;
  } else if (ruleKey === "name") {
    index = 2;
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i][index] === ruleValue) {
      count++;
    }
  }

  return count;
}

console.log(
  countItems(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
