module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (const char of str) {
    const config = bracketsConfig.find(x => x.includes(char));
    if (!config) continue;
    if (config[0] === char) {
      stack.push(char);
    } else {
      if (!stack.length || stack.pop() !== config[0]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
