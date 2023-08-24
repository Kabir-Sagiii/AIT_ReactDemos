var obj = {
  name: "Raj Verma",
  city: "Delhi",
  id: 101,
};

var obj1 = {
  ...obj,
  email: "Raj@gmail.com",
  city: "Mumbai",
};

// console.log(obj1);

var details = ["Sneha", "female", 101, "hyd"];

var anotherArray = [...details, "TS", "Sneha@gmail.com"];
console.log(anotherArray);
