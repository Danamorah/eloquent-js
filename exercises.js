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
