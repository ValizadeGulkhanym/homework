/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function removeMiddle(num) {
  let num1 = num / 100 ;
 let num2 = parseInt(num1);
  let num3 = num % 10;
  res = num2 + "num3";
  removeMiddle(num = 198)
  
  return res; //your code here
}

module.exports = removeMiddle;
