var product = {
  name: "Laptop",
  price: 1000,
  totalPrice: function (num) {
    console.log(1000 * num); //7000
  },
};

product.totalPrice(7);
product.totalPrice(10);

// console.log()
