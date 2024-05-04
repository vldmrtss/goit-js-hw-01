function getElementWidth(content, padding, border) {
  const a = parseInt(content);
  const b = parseInt(padding);
  const c = parseFloat(border);
  const boxSizing = b * 2;
  const borderBox = c * 2;
  return a + boxSizing + borderBox;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
