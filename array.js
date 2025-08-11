const createNewArray = new Array(1, 2, 3, 4, 5, 6);
console.log(createNewArray);

let fruits = ["apple", "banana", "mango"];
// fruits.push("dj");
// fruits.pop("mango");
fruits.copyWithin(0, 1);
// fruits[0] = "dalim";
console.log(fruits);
let languages = ["HTML", "CSS", "JavaScript", "ReactJS"];
let iterator = languages.entries();
console.log(iterator.next().value); // [0, 10]
console.log(iterator.next().value); // [1, 20]
console.log(iterator.next().value)