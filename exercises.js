//looping a triangle
//Write a loop that makes seven calls to console.log to output the following triangle:
//#
//##
//###
//####
//#####
//######
//#######

let hash = "";
for ( let index = 0; hash.length < 7; index ++ ){
  hash += "#"
  console.log(hash);
}

// fizzbuzz
// write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// for numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3)
// print "buzz" instead.
// When you have that working, modify your program to print "fizzbuzz" for numbers that are divisible by both
// 3 and 5 (and still print "fizz" or "buzz" for numbers divisible by only one of those)

for( let index = 1; index <= 100; index ++){
  console.log(index)
  if(index % 3 === 0 && index % 5 === 0){
    console.log("Fizzbuzz")
  }
  else if ( index % 3 === 0 ){
    console.log("Fizz")
  }
  else if (index % 5 === 0){
    console.log("Buzz")
  }
}

//Chessboard
//Write a program that creates a string that represents an 8 x 8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
//Passing this string to console.log should show something like this.

// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #

//When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid
//of the given width and height
