const getPremiumSubEnd = (subType) => {
  const months = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();
  const currentYear = date.getFullYear();
  let subEndDay;
  let subEndDate;
  const subTypeNum = subType === "weekly" ? 7 : 30;

  //if currentDay + subDays > currentMonth
  if (currentDay + subTypeNum - 1 > months[currentMonth]) {
    //then subEndDate = subTypeNum - nextMonth-currentDay
    subEndDay = months[currentMonth + 1] - currentDay + subTypeNum - 2;
    subEndDate = `${subEndDay}/${currentMonth + 1}/${currentYear}`;
  } else {
    subEndDay = currentDay + subTypeNum - 1;
    subEndDate = `${subEndDay}/${currentMonth}/${currentYear}`;
  }
  console.log(currentDay);
  return subEndDate;
};
console.log(getPremiumSubEnd("monthly"));
