const salariess = [
  172257, 97417, 172257, 30947, 107121, 121672, 119201, 119035, 92828, 119201,
  129979, 105340, 119201, 105340, 105340, 105340, 105340, 105340, 113031, 93549,
  93549, 115596, 106172, 70429, 115852, 73607, 115852, 109478, 95566, 92781,
  46813, 95529, 57003, 137453, 99943, 137453, 57256, 65856, 71952, 115852,
  75895, 103186, 103186, 103186, 103186, 67509, 103186, 63153, 63153, 65432,
  103186, 103186, 103186, 63153, 63800, 66215, 66215, 66215, 66215, 66215,
  66215, 66215, 65199, 60330, 66024, 72749, 72749, 72749, 80488, 47499, 55651,
  60216, 61635, 59852, 60216, 71220, 71220, 71220, 68021, 72819, 56522, 68909,
  81498, 68309, 45307, 76412, 63225, 75382, 84054, 113237, 84054, 50314, 56723,
  41536, 105282, 60876, 105282, 75382, 91925, 87462, 87462, 87462, 78935, 97088,
  82623, 66227, 66227, 81125, 102743, 81125, 81125, 83355, 79507, 81125, 81125,
  104799, 88126, 83355, 88126, 65646, 77991, 88126, 64755, 62821, 62821, 102338,
  86845, 108924, 96369, 111607, 84034, 84034, 80344, 98146, 84034, 98146, 88746,
  85825, 88746, 92307, 87673, 91880, 87673, 87673, 87673, 87345, 91766, 87345,
  87345, 113845, 130669, 95750, 95750, 95750, 95750, 95750, 95750, 95750, 95750,
  54556, 62187, 55978, 53664, 66281, 59387, 65626, 59387, 51082, 56425, 56425,
  57634, 57634, 63783, 60448, 46607, 63911, 85808, 67176, 65989, 63392, 76632,
  76632, 76632, 76632, 65306, 65306, 69652, 79401, 66398, 120640, 61670, 95361,
  65306, 91733, 115128, 81384, 66398, 66398, 98522, 80024, 76326, 66398, 56634,
  92085, 90722, 90722, 73971, 73971, 63794, 64904, 80539, 77667, 116384, 82673,
  68514, 40675, 40675, 40675, 44120, 83183, 51438, 83183, 49474, 46366, 57887,
  50370, 46381, 50370, 46405, 55800, 49714, 73817, 43931, 53034, 46381, 38515,
  47141, 56533, 45850, 55625, 52799, 33547, 41257, 50137, 55196, 105821, 50381,
  125332, 49691, 91555, 63804, 82762, 87306, 70239, 83473, 99077, 82988, 80688,
  88255, 81208, 85907, 77298, 84758, 86439, 72274, 73747, 74515, 102061, 82313,
  73652, 94938, 79448, 65061, 71916, 63762, 111963, 68685, 66398, 65230, 67761,
  74733, 66260, 72876, 75663, 62174, 30060, 54567, 55148, 60607, 61229, 59929,
  55998, 59534, 60177, 58529, 59886, 57460, 37814, 42545, 51949, 50000, 51232,
  57303, 64752, 41397, 34279, 49934, 32324, 83857, 36315, 47883, 53524, 65601,
  48757, 66409, 66449, 29742, 51751, 58698, 58698, 58698, 1780, 33603, 46245,
  58698, 29394, 2932, 51039, 57323, 69047, 58306, 47455, 33351, 59897, 57323,
  41500, 54240, 43068, 38083, 48931, 53353, 37103, 56767, 69390, 161253, 206258,
  198564, 111001, 60113, 127660, 110157, 208000, 110157, 132048, 83961, 87744,
  83961, 85786, 61725, 47742, 49194, 55375, 76790, 55375, 72651, 72651, 93100,
  72651, 72651, 109059, 177657, 72651, 78141, 104923, 206756, 192469, 197591,
  194468, 194468, 203468, 178148, 194468, 194938, 194468, 194468, 194468,
  194468, 73214, 194468, 194468, 76423, 53562, 194468, 194468, 53562, 73214,
  73214, 53562, 53562, 58121, 79482, 34415, 60906, 74158, 48676, 34060, 34994,
  75635, 37176, 48425, 38598, 69223, 51804, 42860, 42860, 42860, 48198, 52084,
  52084, 81997, 29938, 60471, 31034, 57043, 42250, 39998, 34909, 34533, 87415,
  38484, 33962, 38484, 48761, 44386, 62696, 63982, 47209, 75980, 76811, 76811,
  58404, 61197, 76811, 61197, 71016, 37819, 52390, 50149, 38967, 32382, 55522,
  50823, 46959, 34675, 25839, 26870, 26870, 72715, 30438, 26320, 72314, 39124,
  29698, 48504, 59213, 40419, 50780, 50178, 80109, 60832, 80109, 58902, 101808,
  54975, 37267, 40948, 45204, 42810, 44734, 50644, 40480, 40357, 56406, 48464,
  36300, 40538, 56796, 44731, 57733, 32561, 56796, 48690, 50865, 64255, 67911,
  42484, 67911, 59918, 59918, 44445, 84083, 56495, 67803, 40387, 58800, 43861,
  49888, 61530, 40308, 84408, 37136, 62991, 61534, 42472, 62426, 42083, 49013,
  54118, 62915, 40865, 37615, 37002, 50082, 54885, 48178, 76933, 49008, 39052,
  54256, 43256, 62637, 54102, 46617, 53119, 39517, 40838, 40948, 73218, 56153,
  100453, 46817, 59581, 42144, 64986, 90072, 58683, 79184, 39938, 40938, 40938,
  70641, 42155, 48145, 34652, 136490, 85308, 109449, 55196, 57057, 53416, 70885,
  75076, 73826, 46812, 73826, 56220,
];
const countSalaryRange2 = ({ salaries: salaryArray }) => {
  const ranges = {
    tenkRange: "0-19999",
    twentykRange: "20000-39999",
    fortykRange: "40000-59999",
    sixtykRange: "60000-79999",
    eightykRange: "80000-99999",
    hundredkRange: "100000-119999",
    hundredAndTwentykRange: "120000-139999",
    hundredAndFortykRange: "140000-159999",
    hundredAndSixtykRange: "160000-179999",
    hundredAndEightykRange: "180000-199999",
    twoHundredkRange: "200000-219999",
    twoHundredAndTwentykRange: "220000-239999",
    twoHundredAndFortykRange: "240000-259999",
    twoHundredAndSixtykRange: "260000-279999",
    twoHundredAndEightykRange: "280000-299999",
    threeHundredkRange: "300000-319999",
    threeHundredAndTwentykRange: "320000-339999",
    threeHundredAndFortykRange: "340000-359999",
    threeHundredAndSixtykRange: "360000-379999",
    threeHundredAndEightykRange: "380000-399999",
    fourHundredkRange: "400000-419999",
    fourHundredAndTwentykRange: "420000-439999",
    fourHundredAndFortykRange: "440000-459999",
    fourHundredAndSixtykRange: "460000-479999",
    fourHundredAndEightykRange: "480000-499999",
  };

  const dataResponse = {};
  for (const val of Object.values(ranges)) {
    dataResponse[val] = 0;
  }

  for (const salary of salaryArray) {
    if (
      salary > Number(ranges.tenkRange.split("-")[0]) &&
      salary <= Number(ranges.tenkRange.split("-")[1])
    ) {
      ranges.tenkRange in dataResponse
        ? (dataResponse[ranges.tenkRange] += 1)
        : (dataResponse[ranges.tenkRange] = 1);
    } else if (
      salary >= Number(ranges.twentykRange.split("-")[0]) &&
      salary <= Number(ranges.twentykRange.split("-")[1])
    ) {
      ranges.twentykRange in dataResponse
        ? (dataResponse[ranges.twentykRange] += 1)
        : (dataResponse[ranges.twentykRange] = 1);
    }
    /////////////////////////////////////
    else if (
      salary >= Number(ranges.fortykRange.split("-")[0]) &&
      salary <= Number(ranges.fortykRange.split("-")[1])
    ) {
      ranges.fortykRange in dataResponse
        ? (dataResponse[ranges.fortykRange] += 1)
        : (dataResponse[ranges.fortykRange] = 1);
    } else if (
      salary >= Number(ranges.sixtykRange.split("-")[0]) &&
      salary <= Number(ranges.sixtykRange.split("-")[1])
    ) {
      ranges.sixtykRange in dataResponse
        ? (dataResponse[ranges.sixtykRange] += 1)
        : (dataResponse[ranges.sixtykRange] = 1);
    } else if (
      salary >= Number(ranges.eightykRange.split("-")[0]) &&
      salary <= Number(ranges.eightykRange.split("-")[1])
    ) {
      ranges.eightykRange in dataResponse
        ? (dataResponse[ranges.eightykRange] += 1)
        : (dataResponse[ranges.eightykRange] = 1);
    } else if (
      salary >= Number(ranges.hundredkRange.split("-")[0]) &&
      salary <= Number(ranges.hundredkRange.split("-")[1])
    ) {
      ranges.hundredkRange in dataResponse
        ? (dataResponse[ranges.hundredkRange] += 1)
        : (dataResponse[ranges.hundredkRange] = 1);
    } else if (
      salary >= Number(ranges.hundredAndTwentykRange.split("-")[0]) &&
      salary <= Number(ranges.hundredAndTwentykRange.split("-")[1])
    ) {
      ranges.hundredAndTwentykRange in dataResponse
        ? (dataResponse[ranges.hundredAndTwentykRange] += 1)
        : (dataResponse[ranges.hundredAndTwentykRange] = 1);
    } else if (
      salary >= Number(ranges.hundredAndFortykRange.split("-")[0]) &&
      salary <= Number(ranges.hundredAndFortykRange.split("-")[1])
    ) {
      ranges.hundredAndFortykRange in dataResponse
        ? (dataResponse[ranges.hundredAndFortykRange] += 1)
        : (dataResponse[ranges.hundredAndFortykRange] = 1);
    } else if (
      salary >= Number(ranges.hundredAndSixtykRange.split("-")[0]) &&
      salary <= Number(ranges.hundredAndSixtykRange.split("-")[1])
    ) {
      ranges.hundredAndSixtykRange in dataResponse
        ? (dataResponse[ranges.hundredAndSixtykRange] += 1)
        : (dataResponse[ranges.hundredAndSixtykRange] = 1);
    } else if (
      salary >= Number(ranges.hundredAndEightykRange.split("-")[0]) &&
      salary <= Number(ranges.hundredAndEightykRange.split("-")[1])
    ) {
      ranges.hundredAndEightykRange in dataResponse
        ? (dataResponse[ranges.hundredAndEightykRange] += 1)
        : (dataResponse[ranges.hundredAndEightykRange] = 1);
    } else if (
      salary >= Number(ranges.twoHundredkRange.split("-")[0]) &&
      salary <= Number(ranges.twoHundredkRange.split("-")[1])
    ) {
      ranges.twoHundredkRange in dataResponse
        ? (dataResponse[ranges.twoHundredkRange] += 1)
        : (dataResponse[ranges.twoHundredkRange] = 1);
    } else if (
      salary >= Number(ranges.twoHundredAndTwentykRange.split("-")[0]) &&
      salary <= Number(ranges.twoHundredAndTwentykRange.split("-")[1])
    ) {
      ranges.twoHundredAndTwentykRange in dataResponse
        ? (dataResponse[ranges.twoHundredAndTwentykRange] += 1)
        : (dataResponse[ranges.twoHundredAndTwentykRange] = 1);
    } else if (
      salary >= Number(ranges.twoHundredAndFortykRange.split("-")[0]) &&
      salary <= Number(ranges.twoHundredAndFortykRange.split("-")[1])
    ) {
      ranges.twoHundredAndFortykRange in dataResponse
        ? (dataResponse[ranges.twoHundredAndFortykRange] += 1)
        : (dataResponse[ranges.twoHundredAndFortykRange] = 1);
    } /////////////////////////////////////////////////////
    else if (
      salary >= Number(ranges.twoHundredAndSixtykRange.split("-")[0]) &&
      salary <= Number(ranges.twoHundredAndSixtykRange.split("-")[1])
    ) {
      ranges.twoHundredAndSixtykRange in dataResponse
        ? (dataResponse[ranges.twoHundredAndSixtykRange] += 1)
        : (dataResponse[ranges.twoHundredAndSixtykRange] = 1);
    } else if (
      salary >= Number(ranges.twoHundredAndEightykRange.split("-")[0]) &&
      salary <= Number(ranges.twoHundredAndEightykRange.split("-")[1])
    ) {
      ranges.twoHundredAndEightykRange in dataResponse
        ? (dataResponse[ranges.twoHundredAndEightykRange] += 1)
        : (dataResponse[ranges.twoHundredAndEightykRange] = 1);
    } else if (
      salary >= Number(ranges.threeHundredkRange.split("-")[0]) &&
      salary <= Number(ranges.threeHundredkRange.split("-")[1])
    ) {
      ranges.threeHundredkRange in dataResponse
        ? (dataResponse[ranges.threeHundredkRange] += 1)
        : (dataResponse[ranges.threeHundredkRange] = 1);
    } else if (
      salary >= Number(ranges.threeHundredAndTwentykRange.split("-")[0]) &&
      salary <= Number(ranges.threeHundredAndTwentykRange.split("-")[1])
    ) {
      ranges.threeHundredAndTwentykRange in dataResponse
        ? (dataResponse[ranges.threeHundredAndTwentykRange] += 1)
        : (dataResponse[ranges.threeHundredAndTwentykRange] = 1);
    } else if (
      salary >= Number(ranges.threeHundredAndFortykRange.split("-")[0]) &&
      salary <= Number(ranges.threeHundredAndFortykRange.split("-")[1])
    ) {
      ranges.threeHundredAndFortykRange in dataResponse
        ? (dataResponse[ranges.threeHundredAndFortykRange] += 1)
        : (dataResponse[ranges.threeHundredAndFortykRange] = 1);
    } else if (
      salary >= Number(ranges.threeHundredAndSixtykRange.split("-")[0]) &&
      salary <= Number(ranges.threeHundredAndSixtykRange.split("-")[1])
    ) {
      ranges.threeHundredAndSixtykRange in dataResponse
        ? (dataResponse[ranges.threeHundredAndSixtykRange] += 1)
        : (dataResponse[ranges.threeHundredAndSixtykRange] = 1);
    } else if (
      salary >= Number(ranges.threeHundredAndEightykRange.split("-")[0]) &&
      salary <= Number(ranges.threeHundredAndEightykRange.split("-")[1])
    ) {
      ranges.threeHundredAndEightykRange in dataResponse
        ? (dataResponse[ranges.threeHundredAndEightykRange] += 1)
        : (dataResponse[ranges.threeHundredAndEightykRange] = 1);
    } else if (
      salary >= Number(ranges.fourHundredkRange.split("-")[0]) &&
      salary <= Number(ranges.fourHundredkRange.split("-")[1])
    ) {
      ranges.fourHundredkRange in dataResponse
        ? (dataResponse[ranges.fourHundredkRange] += 1)
        : (dataResponse[ranges.fourHundredkRange] = 1);
    } else if (
      salary >= Number(ranges.fourHundredAndTwentykRange.split("-")[0]) &&
      salary <= Number(ranges.fourHundredAndTwentykRange.split("-")[1])
    ) {
      ranges.fourHundredAndTwentykRange in dataResponse
        ? (dataResponse[ranges.fourHundredAndTwentykRange] += 1)
        : (dataResponse[ranges.fourHundredAndTwentykRange] = 1);
    } else if (
      salary >= Number(ranges.fourHundredAndFortykRange.split("-")[0]) &&
      salary <= Number(ranges.fourHundredAndFortykRange.split("-")[1])
    ) {
      ranges.fourHundredAndFortykRange in dataResponse
        ? (dataResponse[ranges.fourHundredAndFortykRange] += 1)
        : (dataResponse[ranges.fourHundredAndFortykRange] = 1);
    } else if (
      salary >= Number(ranges.fourHundredAndSixtykRange.split("-")[0]) &&
      salary <= Number(ranges.fourHundredAndSixtykRange.split("-")[1])
    ) {
      ranges.fourHundredAndSixtykRange in dataResponse
        ? (dataResponse[ranges.fourHundredAndSixtykRange] += 1)
        : (dataResponse[ranges.fourHundredAndSixtykRange] = 1);
    } else if (
      salary >= Number(ranges.fourHundredAndEightykRange.split("-")[0]) &&
      salary <= Number(ranges.fourHundredAndEightykRange.split("-")[1])
    ) {
      ranges.fourHundredAndEightykRange in dataResponse
        ? (dataResponse[ranges.fourHundredAndEightykRange] += 1)
        : (dataResponse[ranges.fourHundredAndEightykRange] = 1);
    }
  }
  //console.log(dataResponse);
  return dataResponse;
};
const countSalaryRange = ({ num = 500000, cluster = 20000, salaries = [] }) => {
  const numberOfClusters = num / cluster;
  //numberOfClusters=25
  const ranges = {};

  for (let i = 0; i < numberOfClusters; i++) {
    let lowerBound = i,
      upperBound = lowerBound + 1;
    const index = `${lowerBound * cluster}-${upperBound * cluster - 1}`;

    ranges[index] = 0;
    // for (const salary of salaries) {
    //   if (
    //     salary >= lowerBound * cluster &&
    //     salary <= upperBound * cluster - 1
    //   ) {
    //     ranges[index] > 0 ? (ranges[index] += 1) : (ranges[index] = 1);
    //   }
    // }
  }
  for (let i = 0; i < salaries.length; i++) {
    // salaray => 56000
    // salary / cluster => 56000 / 20000 = 2.8 => 2
    // Key is 20000-39999
    const boundary = Math.trunc(salaries[i] / cluster);
    // const key = `${(boundary - 1) * cluster}*${boundary * cluster - 1}`;
    //'40000-59999'
    let lowerBound = i,
      upperBound = lowerBound + 1;

    //const key = `${lowerBound * cluster}-${upperBound * cluster - 1}`;
    const key = `${(boundary - 1) * cluster}-${boundary * cluster - 1}`;
    if (key in ranges) {
      console.log(key);
      //console.log(typeof Number(upperBound * cluster - 1));
      if (
        salaries[i] >= Number(key.split("-")[0]) &&
        salaries[i] <= Number(key.split("-")[0])
      ) {
        console.log(key);
        ranges[key] > 0 ? (ranges[key] += 1) : (ranges[key] = 1);
        // console.log(ranges);
      }
    }
  }
  return ranges;
};

//console.log(countSalaryRange({ salaries: salariess }));
countSalaryRange({ salaries: salariess });
