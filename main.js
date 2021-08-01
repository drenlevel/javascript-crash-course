/* alert('Hello World'); */
/* console.log('Hello World');
console.error('This is an error');
console.worn('This is a warnong'); */

// var, let, const
/* 
let age = 30;
age = 31; */

/* let score; */

/* score = 10; */

/* console.log(score); */

// Stirng, Numbers, Boolean, null, undefined
/* 
const name = 'John';
const age = 30; */
/* const raiting = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z); */

// Concatination
/* console.log('My name is' + name + 'and I am' + age);
// Template String
console.log('My name is ${name} and I am {age}');

console.log(hello);
 */

/* const s = 'Hello World!'; */

/* const s = 'technology, computers, it, code';*/
/* console.log(s.length); */
/* console.log(s.substring(0.5).toUpperCase()); */

/* console.log(s.split('')); */

/* console.log(s.split(',')); */

// Arrays - variables that hold multiple values

/* const numbers = new Array(1,2,3,4,5); */
/* console.log(numbers); */

/* const fruits = ['apples','oranges', 'pears', 10, true];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));

console.log(fruits); */
/* 
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music','movies','sport'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
} */

/* console.log(person.hobbies[1]); */
/* 
const { firstName, lastName, address: {city} } = person;

console.log(city); */
/* 
person.email = 'john@gmail.com';

console.log(person); */

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];

/* console.log(todos[2].text); */
/* 
const todoJSON = JSON.stringify(todos);
console.log(todoJSON); */

//For

/* for(let i=0; i<=10; i++) {
  console.log(i);
} */
/* 
for (let i = 0; i <= 10; i++) {
  console.log("For Loop Number: ${i}");
}

//While
let i = 0;
while (i < 10) {
  console.log("While Loop Number: ${i}");
  i++;
} */

for( let i=0; i < todos.length; i++) {
  console.log('For Loop Number: ${i}');
}
