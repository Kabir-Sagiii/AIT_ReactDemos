import { useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";
function Cards() {
  const [images, setImages] = useState([
    "https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1",
    "https://th.bing.com/th/id/OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH?rs=1&pid=ImgDetMain",
    "https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg",
    "https://i.pinimg.com/originals/f1/b4/f3/f1b4f35c609fd65e1012fe5c1e81ba9b.jpg",
  ]);
  return (
    <div className="cards">
      <Card url={images[0]} />
      <Card url={images[1]} />
      <Card url={images[2]} />

      <Card url={images[3]} />
    </div>
  );
}

export default Cards;
