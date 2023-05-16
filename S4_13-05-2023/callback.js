function f1(f) {
  console.log("f1");
  f();
  f();
}

f1(function () {
  console.log("Anonomous function");
});
