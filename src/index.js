module.exports = function multiply(first, second) {
  const resultMultiply = BigInt(first) * BigInt(second);
  
  return  resultMultiply.toString();
}
