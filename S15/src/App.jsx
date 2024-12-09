import "./App.css";

import Nav from "./nav/Nav";
import A from "./context-api/A";
import Cards from "./Parent-Child/Cards/Cards";

function App() {
  return (
    <div>
      <Nav />
      <div style={{ padding: "50px" }}>
        <A />
      </div>
      {/* <Cards /> */}
    </div>
  );
}

export default App;
