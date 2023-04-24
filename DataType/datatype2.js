let Kriva = {
    age: 1,
    year: 2022,
    colour: true
}    
let Hiral = {
    age: "1",
    year: "2022",
    colour: BigInt(5)
}
let Ajay = {
    age: "1",
    year: 2022,
    colour: "null"
}
let Jignasha = {
    age: "1",
    year: "2022",
    colour: "null"
}
console.log(typeof Kriva, Kriva);
console.log(Hiral);
console.log(Ajay);
console.log(Jignasha);
console.log(Jignasha.age);

let family = [Kriva, Hiral, Jignasha, Ajay]
console.log(family[2]);
console.log(typeof family, family);
console.log(family.length);