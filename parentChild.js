"use strict";

/*

Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2    4   15
 \ /   / | \ /
  3   5  8  9
   \ / \     \
    6   7    11


Sample input/output (pseudodata):

parentChildPairs = [
    (1, 3), (2, 3), (3, 6), (5, 6), (15, 9),
    (5, 7), (4, 5), (4, 8), (4, 9), (9, 11)
]


Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.


Output may be in any order:

findNodesWithZeroAndOneParents(parentChildPairs) => [
  [1, 2, 4, 15],       // Individuals with zero parents
  [5, 7, 8, 11]        // Individuals with exactly one parent
]

Complexity Analysis variables:

n: number of pairs in the input

*/
// returning elememts with no parents and exactly one parent
//[1, 3], [2, 3],
// steps:
//1. loop through the array
//2. Map all the parents and child into their separate hashTable
//using the elements as key and their frequencies as value

const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  const elementWithNoParent = [];
  const elementWithOneParent = [];
  const parentMap = {};
  const childMap = {};

  for (let element of parentChildPairs) {
    //to be a parent, it not appear as a child
    const [parent, child] = element;

    if (parent in parentMap) {
      parentMap[parent] += 1;
    } else {
      parentMap[parent] = 1;
    }
    if (child in childMap) {
      childMap[child] += 1;
    } else {
      childMap[child] = 1;
    }
  }
  //console.log(parentMap);
  for (const p of Object.keys(parentMap)) {
    if (p in childMap) {
    } else {
      elementWithNoParent.push(Number(p));
    }
  }

  for (const ch of Object.keys(childMap)) {
    if (childMap[ch] === 1) {
      elementWithOneParent.push(Number(ch));
    }
  }
  // console.log([...new Set(elementWithNoParent)]);
  // console.log([...new Set(elementWithOneParent)]);
  return [
    [...new Set(elementWithNoParent)],
    [...new Set(elementWithOneParent)],
  ];
  //console.log(childMap);
};

const parentChildPairs = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [15, 9],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [9, 11],
];
console.log(findNodesWithZeroAndOneParents(parentChildPairs));
