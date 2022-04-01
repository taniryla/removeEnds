import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
/*-----------------------------------------------------------------
Challenge: 08-removeEnds
Difficulty: Basic
Prompt:
- Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.
Examples:
removeEnds('SEI Rocks!'); //=> "EI Rocks"
removeEnds('a'); //=> "" (empty string)
-----------------------------------------------------------------*/
// Your solution for 08-removeEnds here:

</div>
`;

function removeEnds(str) {
  if (str.length < 3) return "";
  let result = "";
  for (let i = 1; i < str.length - 1; i++) {
    result += str.charAt(i);
  }
  return result;
}
