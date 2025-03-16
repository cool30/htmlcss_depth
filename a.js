// function myConcat(separator) {
//   let result = ""; // initialize list
//   // iterate through arguments
//   for (let i = 1; i < arguments.length; i++) {
//     result += arguments[i] + separator;
//   }
//   return result;
// }


// console.log(myConcat(", ", "red", "orange", "blue"));
// // "red, orange, blue, "

// console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// // "elephant; giraffe; lion; cheetah; "

// console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// // "sage. basil. oregano. pepper. parsley. "

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` properly refers to the person object
  }, 1000);
}

const p = new Person();
console.log(p);
