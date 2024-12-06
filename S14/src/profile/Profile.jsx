import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({
    image:
      "https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1",
    name: "Rohan Sharma",
    gender: "male",
    email: "rohansharma@gmail.com",
  });

  const changeToRohan = () => {
    setUser({
      image:
        "https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1",
      name: "Rohan Sharma",
      gender: "male",
      email: "rohansharma@gmail.com",
    });
  };

  const changeToRiya = () => {
    setUser({
      image:
        "https://www.carvermostardi.com/cmos/wp-content/uploads/2018/05/professional_headshots_tampa_011.jpg",
      name: "Riya Verma",
      gender: "female",
      email: "riyaverma@gmail.com",
    });
  };

  return (
    <div className="profileContainer">
      <div className="leftPPanel">
        <img src={user.image} width={"100%"} height={"100%"} />
      </div>
      <div className="rightPPanel">
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>{user.name}</dd>
          <dt>
            <b>Gender</b>
          </dt>
          <dd>{user.gender}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{user.email}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus saepe ab, deserunt laudantium laboriosam numquam
            maxime voluptas distinctio quas voluptatum vitae, veritatis cum unde
            odio corporis, ratione dolores excepturi quibusdam.maxime voluptas
            distinctio quas voluptatum vitae, veritatis cum unde odio corporis,
            ratione dolores excepturi quibusdam.
          </dd>
        </dl>
        <button onClick={changeToRohan}>Rohan</button>
        <button onClick={changeToRiya}>Riya</button>
      </div>
    </div>
  );
}

export default Profile;
