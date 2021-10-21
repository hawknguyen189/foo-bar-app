import React from "react";
/**
 * Creates a new rectagle
 * @class
 */
class Rectangle {
  height: number;
  width: number;
  /**
   * constructor description
   * @param  {number} height create new rectangle with the provided height
   * @param  {number} width create new rectangle with the provided width
   */
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }
  /** calculate are by multiplcation of width & height
   * @return {number} the area value
   */
  calculateArea(): number {
    return this.height * this.width;
  }
  /** check whether it's a square or not
   * @return {boolean} check square result
   */
  isSquare(): boolean {
    return this.width === this.height ? true : false;
  }
}
/**
 * check if the word begins with a vowel and ends with the same letter
 * @function checkWord
 * @param {string} word the input word to check
 * @return {boolean} the check result
 */
const checkWord = (word: string): boolean => {
  //as the question didn't say implicitly case sensivtive or not so I make assumption to treat all
  // upper and lower the same
  const checkInput = word.toLowerCase();
  const vowel = ["a", "e", "i", "o", "u"];
  return vowel.includes(checkInput[0]) &&
    checkInput[0] === checkInput[checkInput.length - 1]
    ? true
    : false;
};

const words: string[] = ["civic", "racecar"];
/**
 * check if the word is palindrome by using closure
 * @function isPalindrome
 * @param {string} word the input word to check
 * @return {boolean} the check result
 */
const isPalindrome = (word: string): boolean => {
  //the closure will end and return result when no more or only 1 letter left
  return word.length === 1 || word.length === 0
    ? true
    : word[0] === word[word.length - 1]
    ? isPalindrome(word.substr(1, word.length - 2))
    : false;
};
//as for in statement iterates over all properties of an object, it represent key instead of value
//a switch to for of or use words[key] could also solve this bug
for (let word of words) {
  if (isPalindrome(word)) {
    console.log(word, "is palindrome");
  } else {
    console.log(word, "is not palindrome");
  }
}

const Heyday = (): JSX.Element => {
  return <div></div>;
};

export default Heyday;
