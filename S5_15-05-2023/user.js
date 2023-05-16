var user1 = {
  id: 123,
  name: "Aysuh Verma",
  email: "Ayush@gmail.com",
  address: {
    city: "Hyderabad",
    state: "TS",
    pin: 500018, //500035
  },
};

console.log(user1.address);

user1.address.pin = 500035;

console.log(user1.address);

console.log(user1.email);
