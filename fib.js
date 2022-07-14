const prob1 = (number, memo = {}) => {
  if (number in memo) return memo[number];
  if (number <= 2) {
    return 1;
  }
  memo[number] = prob1(number - 1, memo) + prob1(number - 2, memo);
  for (let i = 0; i < number; i++) {
    return memo[number];
  }
};
