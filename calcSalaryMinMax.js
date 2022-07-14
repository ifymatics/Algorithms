const calculateMinAndMax = (salaryArray = []) => {
  let max = Math.max(...salaryArray);
  let min = Math.min(...salaryArray);

  for (let i = 0; i < salaryArray; i++) {
    const sararyPoint = salaryArray[i];

    if (max > sararyPoint) {
      if (min > sararyPoint) {
        min = sararyPoint;
      }
    } else {
      max = sararyPoint;
    }
  }
  return { min, max };
};
module.exports = calculateMinAndMax;
