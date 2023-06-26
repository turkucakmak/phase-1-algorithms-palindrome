function isPalindrome(string) {
  const word = string;
  const array1 =[];

  for (let j =0; j < word.length;j++){
    array1.push(word[j]);
  }
  console.log(array1)

  const array2 =[];
  for (let i=word.length-1; i>=0; i--){
    array2.push(word[i]);
  }
  console.log(array2);

  return array1.toString() === array2.toString();

}
isPalindrome("racecar");
/* 
  1. get the word

  4. write the word backwards
  5. read it
  6. compare results
  7. if same, print true
  8. if not, print false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;