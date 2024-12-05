// function Counter() {
//   var count = 0;

//   const increaseCount = () => {
//     count = count + 1;
//     console.log(count);

//     document.querySelector("h2").innerText = `Counter App : ${count}`;
//   };

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "100px",
//       }}
//     >
//       <h2 style={{ margin: "20px", color: "green" }}>Counter App :{count}</h2>
//       <button onClick={increaseCount}>increaseCount by 1</button>
//     </div>
//   );
// }

import { useState } from "react";
function Counter() {
  // let myVar = useState(0); //myVar = [state,setState]

  let [state, setState] = useState(0);
  //Destructuring in Javascript

  const increaseCount = () => {
    // var state = myVar[0];
    // var setState = myVar[1];
    // setState(state + 1);
    // myVar[1](myVar[0] + 1);

    setState(state + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h2 style={{ margin: "20px", color: "green" }}>Counter App :{state}</h2>
      <button onClick={increaseCount}>increaseCount by 1</button>
    </div>
  );
}

export default Counter;
