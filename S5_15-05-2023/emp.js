var emp = {
  id: 101,
  name: "Priyanka Reddy",
  education: {
    school: {
      name: "xyz",
      city: "banglore", // emp.education.school.city
    },
  },
};
console.log(emp);
emp.education.school.state = "KA";

console.log(emp);
