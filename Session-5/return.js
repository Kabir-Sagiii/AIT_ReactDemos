function fn() {
  return "normal function returning some value";
}

var data = fn();
console.log(data);

var myArrow = () => ({
  name: "Raj",
});

var mydata = myArrow();
console.log(mydata);
