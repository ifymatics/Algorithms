// function shuffle(array, data) {
//   let currentIndex = array.length,
//     randomIndex,
//     temp;

//   // While there remain elements to shuffle...
//   while (currentIndex != 0) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   temp = array[data.pos];

//   const index1 = array.indexOf(data.value);
//   array[data.pos] = data.value;
//   array[index1] = temp;

//   return array;
// }

// // Used like so

// const arr = [2, 11, 37, 42, 66, 8, 88];
// shuffle(arr, { pos: 2, value: 66 });
// console.log(arr);

const changeOrderNo = (position, phaseObj) => {
  const phases = [
    { id: "1px", order_no: 5 },
    { id: "2px", order_no: 1 },
    { id: "3px", order_no: 3 },
    { id: "4px", order_no: 6 },
    { id: "5px", order_no: 4 },
    { id: "6px", order_no: 2 },
    { id: "7px", order_no: 7 },
  ];
  const currentPhase = phaseObj;

  // console.log({ current_position: phaseObj.order_no, position: position });
  // currentPhase.order_no = position;

  const filteredPhases = phases.filter((phase) => phase.id !== phaseObj.id);

  for (let i = 0; i < filteredPhases.length; i++) {
    const phase = filteredPhases[i];

    if (phase.order_no >= position && phase.order_no < currentPhase.order_no) {
      filteredPhases[i].order_no += 1;
    } else if (
      phase.order_no <= position &&
      phase.order_no > currentPhase.order_no
    ) {
      filteredPhases[i].order_no -= 1;
    }
  }
  phaseObj.order_no = position;
  const finalUpdatedPhase = [...filteredPhases, phaseObj];
  console.log(finalUpdatedPhase);
  /*
    map through the postions
      case 1: position is less than current_position but greater than 
         position =2,
         current position = 5,
         change position 5 to 2
         add 1 to all the order_no greater than position but less than current_position
    case 2: position is more than current_position
         position =6,
         current position = 3,
         change position 3 to 6
         minus 1 from all the order_no less than position but greater than current_position

    */

  // if (position < phase.order_no) {
  //   phase.order_no = position;
  // }
};
changeOrderNo(2, { id: "1px", order_no: 5 });
//changeOrderNo(5, "2px");
