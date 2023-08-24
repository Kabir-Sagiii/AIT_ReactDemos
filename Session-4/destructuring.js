var details = [20, 30, 40, 50];

var [x, y, z] = details; //[20, 30, 40, 50];
console.log(x, y, z);

// console.log(details[0]);
// console.log(details[1]);
// console.log(details[2]);
// console.log(details[3]);

var obj = {
  name: "Raj Verma",
  city: "Delhi",
  id: 101,
};

var { name, id, city } = obj;

console.log(id, city, name);

// console.log(obj.id);
// console.log(obj.city);
