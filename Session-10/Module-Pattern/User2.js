// import { gender, fn1 } from "./User1.js"; // Named Import or importing named export

// import fn2 from "./User1.js"; // default import or importing default export

import fn2, { fn1, gender, id } from "./User1.js";

fn2();

fn1();

console.log(gender, id);
