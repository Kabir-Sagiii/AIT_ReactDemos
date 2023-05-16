var products = {
  id: 101,
  pname: "Iphone 14",
  price: 70000,
};

console.log(products);
//Access the Value of Property
// console.log(products.pname);
// console.log(products.id);

//Insert New Property
products.bName = "Apple";
products.rating = 4.5;

// console.log(products);

//update the property value
products.price = 90000;
products.pname = "Iphone 14 pro max";
// console.log(products);

//delete the property
delete products.id;
delete products.bName;
delete products.price;
console.log(products);
