import { useState } from "react";
import B from "./B";
import mycontext from "./context";
function A() {
  let [state, setState] = useState("Raj Verma");
  return (
    <div>
      <h2>A Component</h2> <br />
      <button>Pass Data to E</button>
      <br />
      <br />
      <hr />
      <br />
      <mycontext.Provider value={state}>
        <B />
      </mycontext.Provider>
    </div>
  );
}

export default A;
