function f1() {
  console.log("f1");
}

function f2(f) {
  console.log("f2");
  f();
  f();
}

f2(f1);
