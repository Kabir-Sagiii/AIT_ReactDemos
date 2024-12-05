import "./App.css";
import Header from "./header/Header";
import MainS from "./mains/MainS";
import Nav from "./nav/Nav";
import Counter from "./counter/Counter";
import ImageC from "./imageC/ImageC";
import Profile from "./profile/Profile";
function App() {
  return (
    <div>
      <Nav />
      <Profile />
      {/* <ImageC /> */}
    </div>
  );
}

export default App;
