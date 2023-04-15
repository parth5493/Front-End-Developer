let a = null
let b = 8
let c = BigInt(6)
let d = true // Boolean wrtitten as true or false 
let e = "Hiral"
let f = Symbol()
let g = undefined

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
console.log(typeof d, d);
console.log(typeof e, e);
console.log(typeof f, f);
console.log(typeof e, e);


let student = {
    name : "Hiral",
    age : 25,
    marks : null
}
console.log(student);
console.log(typeof student);
console.log(student.name);
console.log(student.age);
console.log(student.marks);


let product = ["Hyundai", 9000, "Limited", null, "15%", undefined ]
console.log(product);
console.log(typeof product);
console.log(product[0]);
console.log(product[1]);
console.log(product[2]);
console.log(product[3]);
console.log(product[4]);
console.log(product[5]);
console.log(product[6]);
product[6] = 78 //index add
console.log(product[6]);
