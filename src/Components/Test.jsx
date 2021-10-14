import React from "react";
let i =3
let j =4
let k =4
for (i = 0; i < 3; i++) {
  k+=j;
  j=j-1
}
console.log(k)
const Test = () => {
  return (
    <div>
      <p>running test</p>
    </div>
  );
};

export default Test;
