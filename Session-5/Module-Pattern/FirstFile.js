// export var email = "John@gmail.com";
// var gender = "male";

// export var data = {
//   name: "",
//   city: "",
//   id: "",
// };

// export function f1() {
//   console.log("f1 is working");
// }

var email = "John@gmail.com";
var gender = "male";

var data = {
  name: "",
  city: "",
  id: "",
};

function f1() {
  console.log("f1 is working");
}

// export default function f2() {
//     console.log("f2 is working");
//   }

function f2() {
  console.log("f2 is working");
}

export default f2;

export { email, data, f1 };
