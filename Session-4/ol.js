function createOrderedList() {
  //   alert("Working");

  var ol = document.createElement("ol"); // <ol> </ol>
  var li1 = document.createElement("li"); //<li> </li>
  var li2 = document.createElement("li");
  var li3 = document.createElement("li");
  var li4 = document.createElement("li");
  li1.innerText = "Java"; // <li> Java </li>
  li2.innerText = "Springboot";
  li3.innerText = "NodeJS";
  li4.innerText = "Mongodb";

  ol.appendChild(li1);
  ol.appendChild(li2);
  ol.appendChild(li3);
  ol.appendChild(li4);

  document.getElementById("js").appendChild(ol);
}
