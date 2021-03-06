import React from "react";
/**
 * sum all items value based on name in 1 single line using array reduce
 * @function sumAllElementsByName
 * @param {object} items the objects array to calculate the sum
 * @param {string}  targetName the target name
 * @return {number} sum of all items value that is equal to targetName
 */
function sumAllElementsByName(items: any[], targetName: string) {
  return items.reduce(
    (
      acc: { sum: any; count: number; avg: any },
      element: { name: any; value: any }
    ) =>
      element.name === targetName
        ? {
            sum: acc.sum + element.value,
            avg: (acc.sum + element.value) / ++acc.count,
            count: acc.count,
          }
        : { sum: acc.sum, avg: acc.avg, count: acc.count },
    { sum: 0, count: 0, avg: 0 }
  ).sum;
}
/**
 * average all items value based on name in 1 single line using array reduce
 * @function avgAllElementsByName
 * @param {object} items the objects objects to calculate the sum
 * @param {string}  targetName the target name
 * @return {number} average of all items value that is equal to targetName
 */
function avgAllElementsByName(items: any[], targetName: string) {
  return items.reduce(
    (
      acc: { sum: any; count: number; avg: any },
      element: { name: any; value: any }
    ) =>
      element.name === targetName
        ? {
            sum: acc.sum + element.value,
            avg: (acc.sum + element.value) / ++acc.count,
            count: acc.count,
          }
        : { sum: acc.sum, avg: acc.avg, count: acc.count },
    { sum: 0, count: 0, avg: 0 }
  ).avg;
}
// function sumAllElementsByName(items, targetName) {
//   let result = 0;
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].name === targetName) {
//       result += items[i].value;
//     }
//   }
//   return result;
// }
const objArr = [
  {
    name: "hawk",
    value: 2,
  },
  {
    name: "hawk",
    value: 7,
  },
  { name: "kiwi", value: 4 },
  { name: "kiwi", value: 11 },
  { name: "kiwi", value: 2 },
  { name: "susi", value: 7 },
  { name: "susi", value: 6 },
];
const result = sumAllElementsByName(objArr, "kiwi");
const average = avgAllElementsByName(objArr, "kiwi");
console.log("result", result, "avg", average);

// Quesntion 4
// a) What is wrong in the method `concatenameFields` of class `A` ?  How would you fix it?
// b) Please fix the code in classes `A` and `B` so that testQuestion4() resolves to `true`
// c) Please add JSDoc-compatible documentation to all methods in classes `A` and `B`
// This function will have a side effect and return its input
// const makeRequest = require("some-request-library");
const makeRequest = async (value: any) => {
  return value;
};
/**
 * Creates a new word
 * @class
 */
class A {
  /**
   * constructor description
   * @param  {string} someField create new instance with a provided string
   */
  _someField: string;
  _separator: string;
  constructor(someField: string) {
    this._someField = someField;
    this._separator = " ";
  }

  /** concatenameFields method will concentrate the array args into a string word
   * @param {object} instance the object
   * @param {array} values the test input array
   * @return {string} the concentrated value
   */
  concatenameFields(instance: { _separator: any }, values: any[]) {
    return values.join(instance._separator);
  }
  /**
   * converting the original object arrays into string array then call concentrate function
   * @param {object} instance the object
   * @param {array} items the test input objects array
   * @return {string} the final result
   */
  async save(instance: A | B, items: any[]) {
    const values = items.map((name: { name: any }) => name.name);
    const finalValue = this.concatenameFields(instance, values);
    const result = await makeRequest(finalValue);
    return `THE RESULT IS: ${result}`;
  }
}
/**
 * Class representing a word.
 * @extends A
 */
class B extends A {
  /**
   * constructor description
   * @param  {string} someField create new instance with a provided string
   */
  constructor(someField: string) {
    super(someField);
    this._separator = "-";
  }
  //A normal method, public one
  /** concatenameFields method will concentrate the array args into a string word
   * @param {array} values the test input array
   * @return {string} the concentrated value
   */
  // concatenameFields(...values: any[]) {
  //   return `[${super.concatenameFields(values)}]`;
  // }
}

async function testQuestion4() {
  const testInput = [
    { name: "this" },
    { name: "test" },
    { name: "is" },
    { name: "fun" },
  ];

  const a = new A("base A");
  const b = new B("base B");
  console.log("b", b);
  const aResult = await a.save(a, testInput);
  const bResult = await b.save(b, testInput);

  //as the testing doesn't have someField property so I remove it on concentratedFields
  const aIsOK = aResult === "THE RESULT IS: this test is fun";
  const bIsOK = bResult === "THE RESULT IS: [this-test-is-fun]";
  console.log(aResult, bResult);
  return aIsOK && bIsOK;
}
const question4 = async () => {
  console.log("result", await testQuestion4());
};
question4();
const Foobar = () => {
  return (
    <div>
      <p>foo bar</p>
    </div>
  );
};

export default Foobar;
