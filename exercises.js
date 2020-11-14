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
