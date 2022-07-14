// write a function which takes a number argument and determines if it is even number or odd number

function findEvenNumber(n) {

    if (typeof n === 'number') {

        if (n % 2 === 0) {
            return `${n} is an even number`;
        }
        return `${n} is an odd number`;
       
    } else {
        return `${n} is not a number`;
   }
}

console.log(findEvenNumber(45))

   