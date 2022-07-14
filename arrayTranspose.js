/*
You and your friends are all fans of the hit TV show ThroneWorld and like to discuss it on social media. Unfortunately, some of your friends don't watch every new episode the minute it comes out. Out of consideration for them you would like to obfuscate your status updates so as to keep them spoiler-free.

You settle on a route cipher, which is a type of transposition cipher. Given a message and a number of rows and number of columns, to compute the route encryption of the message:

Write out the message row-wise in a grid of size rows by cols
then read the message column-wise.

You are guaranteed that rows * cols == len(message).

Your task is to write a function that, given a message, rows, and cols, returns the route encryption of the message.

Example:

message1 = "One does not simply walk into Mordor", rows1 = 6, cols1 = 6

O n e   d o
e s   n o t
  s i m p l
y   w a l k
  i n t o  
M o r d o r

transpose(message1, rows1, cols1) -> "Oe y Mnss ioe iwnr nmatddoploootlk r"

Other examples:

message2 = "1.21 gigawatts!", rows2 = 5, cols2 = 3
1 . 2
1   g
i g a
w a t
t s !

transpose(message2, rows2, cols2) -> "11iwt. gas2gat!"

message2 = "1.21 gigawatts!", rows3 = 3, cols3 = 5
transpose(message2, rows3, cols3) -> "1ga.it2gt1as w!"

Complexity analysis:

n: the length of the message

*/

"use strict";

const transpose = (message1, rows1, cols1) => {
  const messageArray = [...message1];
  let transposedArray = [];
  let columnArray = [];
  let finalTransposedWord = "";
  //let arrayFill = Array.from({length:6},()=>1);
  //console.log(arrayFill);
  for (const row of messageArray) {
    if (columnArray.length === cols1) {
      transposedArray.push(columnArray);
      columnArray = [];
    }
    if (columnArray.length < cols1) {
      columnArray.push(row);
      //console.log(columnArray)
    }
  }
  transposedArray.push(columnArray);

  while (transposedArray.flat().length > 0) {
    for (const row of transposedArray) {
      finalTransposedWord += row.shift();
      //finalTransposedWord += row.pop();
    }
  }

  return finalTransposedWord;
};
const takeFirst = (arr) => {
  let first = "";
  return arr.shift();
};
//console.log(takeFirst([1,2,3]))
const message1 = "One does not simply walk into Mordor";
const rows1 = 6;
const cols1 = 6;

const message2 = "1.21 gigawatts!";
const rows2 = 5;
const cols2 = 3;
const rows3 = 3;
const cols3 = 5;
// console.log(transpose(message1, rows1, cols1));
// console.log(transpose(message2, rows2, cols2));
// console.log(transpose(message2, rows3, cols3));
const reverseTransposed = (message, row, cols, pattern) => {
  //create row array containers
  const AllRows = [];
  const rowArray = [];
  const reversedTransposedArray = [];
  let originalWord = "";
  const messageArray = [...message];

  for (let i = 0; i < row; i++) {
    AllRows.push([]);
  }
  while (messageArray.length > 0) {
    AllRows.forEach((r) => {
      if (r.length < row) {
        r.push(messageArray.shift());
        if (r.length === row) {
          rowArray.push(r);
        }
        console.log(rowArray);
      }
    });
  }

  console.log(AllRows);
};
reverseTransposed(transpose(message2, rows3, cols3), rows3, cols3, "left");
