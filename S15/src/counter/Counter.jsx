import { useState } from "react";
function Counter() {
  let [state, setState] = useState(0);
  // console.log("called");

  const increaseCount = () => {
    setState(state + 1); //0+1 = 1

    console.log(state); //0 or 1
  };

  // const increaseCount = () => {
  //   // setState(state + 3); // 0 +3 ==> 3
  //   // setState(state + 1); // 3+1 ===>4
  //   // setState(state + 5); //4+5==>9

  //   //updater function
  //   setState((prevState) => {
  //     return prevState + 1;
  //   }); // 0 +1 ==> 1

  //   setState((prevState) => {
  //     return prevState + 1;
  //   }); // 1+1 ===>2

  //   setState((prevState) => {
  //     return prevState + 1;
  //   }); //2+1==>3
  // };

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
