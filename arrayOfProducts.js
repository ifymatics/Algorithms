//Brute force solution
// function arrayOfProducts(array) {
//     // Write your code here.
//       let productArray = [];
//       let product = 1;

//     for (let i = 0; i < array.length; i++) {
//         product = 1;
//         for (let j = 0; j < array.length; j++){
//         if (j !== i) {
//             product = product * array[j];

//             }

//         }
//         productArray.push(product);
//    }
//     return productArray;
// }

// better solution with time complexity of O(n)
function arrayOfProducts(array) {
  // Write your code here.
  const products = new Array(array.length).fill(1);
  let leftRunning = 1;
  // console.log(products);
  for (let i = 0; i < array.length; i++) {
    products[i] = leftRunning;
    leftRunning *= array[i];
  }
  //console.log(leftRunning);
  let rightRunning = 1;
  for (let i = array.length - 1; i > -1; i--) {
    products[i] *= rightRunning;
    rightRunning *= array[i];
  }
  return products;
}

console.log(arrayOfProducts([5, 1, 2, 4]));
