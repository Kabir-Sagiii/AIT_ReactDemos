function ImageBox(props) {
  return (
    <div className="imagebox">
      <img src={props.imageurl} width="170" height="170" />
      <h3>{props.title}</h3>
    </div>
  );
}
