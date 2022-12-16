/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function prevNum(num) {
  let value = num;
  let prevNum = num--;
  return prevNum;
}

module.exports = prevNum;
