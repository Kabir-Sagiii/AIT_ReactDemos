import { useState } from "react";
var imageContainerStyle = {
  textAlign: "center",
  marginTop: "50px",
};

function ImageC() {
  const [title, setTitle] = useState("React JS");

  const [image, setImage] = useState(
    "https://jslib.dev/wp-content/uploads/2022/03/Reactlogo.jpg"
  );
  const changeToNode = () => {
    setImage(
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png"
    );
    setTitle("Node JS");
  };

  const changeToReact = () => {
    setImage("https://jslib.dev/wp-content/uploads/2022/03/Reactlogo.jpg");
    setTitle("React JS");
  };
  return (
    <div style={imageContainerStyle}>
      <h2 style={{ color: "red" }}>{title}</h2>
      <img src={image} width={500} height={300} />
      <br />
      <button onClick={changeToReact}>React JS</button>
      <button onClick={changeToNode}>Node JS</button>
    </div>
  );
}

export default ImageC;
