var obj = {
  name: "Raj Verma",
  city: "Delhi",
  f1: function () {
    console.log(this.name, this.city);
  },
};

obj.f1();

var objWithArrowFn = {
  name: "Sneha Reddy",
  city: "Banglore",
  fn: () => {
    console.log(this.name, this.city);
  },
};

objWithArrowFn.fn();
