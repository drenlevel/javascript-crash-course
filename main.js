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

/* const todos = [
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
]; */

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

/* for( let i=0; i < todos.length; i++) {
  console.log(`For Loop Number: ${i}`);
} */
/* 
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
} */
/* for (let todo of todos) {
  console.log(todo.text);
} */
/* for(let todo of todos) {
  console.log(todo.id);
} */
// forEach, map, filter
/* todos.forEach(function(todo) {
  console.log(todo.text);
}); */
/* const todoText = todos.map(function(todo) {
  return todo.text;
});

console.log(todoText); */
/* 
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
});

console.log(todoCompleted); */


/* const todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text;
}) 

console.log(todoCompleted); */

/* const x = 5;

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
} */

/* const x = 4;
const y = 11;

if (x > 5  && y > 10) {
  console.log('x is more than 5 or y is more than 10');
} 

if(x > 5) {
  if(y > 10){

  }
} */

/* const x = 9;

const color = x > 10 ? 'red' : 'blue';

/* console.log(color); */

/* switch(color) {
  case 'red':
   console.log('color is red');
   break;
   case 'blue':
   console.log('color is blue');
   break;
   default: 
    console.log('color is NOT red or blue');
    break;
} */ 

/* function addNums(num1 = 1, num2 = 1) {
  console.log(num1 + num2);
}
addNums(5, 5); */

/* function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}

console.log(addNums(5, 5)); */

/* const addNums = (num1 = 1, num2 = 1) => {
  console.log(num1 + num2);

}
addNums(5, 5); */

// Constructor fimction
/* function Person(firstName, lastName, dob) {
  this.firstName = firstName; 
  this.lastName = lastName;
  this.dob = new Date(dob);
 */  /* this.getBirthYear = function() {
    return this.dob.getFullYear(); */
  /* } */
 /*  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  } */


/* Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
} */

// Class
/* class Person {
  consturctor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }


  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
} */

// Instantiate object 
/* const person1 = new Person('John', 'Doe', '21-1-1990');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
 */
/* console.log(person2.dob.getFullYear()); */
/* 
console.log(person1.getBirthYear());
console.log(person1.getFullName()); */

/* console.log(person2.getFullName());
console.log(person1); */

/* console.log(window); */

/* alert(1); */

 /* window.alert(1);  */

//Single element
/* console.log(document.getElementById('my-form')); */
/* const form = document.getElementById('my-form');
console.log(form); */
/* console.log(document.getElementById('my-form')); */
/* console.log(document.querySelector('my-form')); */
/* console.log(document.querySelector('.container')); */
/* console.log(document.querySelector('h1')); */

// Multi element 
/* console.log(document.querySelectorAll('.item')); */
/* console.log(document.getElementsByClassName('item')); */
/* console.log(document.getElementsByClassName('li')); */

/* const items = document.querySelectorAll('.item'); */

/* items.forEach((item) => console.log(item)); */

/* const ul = document.querySelector('.items'); */

/* ul.remove(); */
/* ul.lastElementChild.remove(); */
/* ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Dren';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
 */
/* const btn = document.querySelector('.btn'); */
/* btn.style.background = 'red'; */

/* btn.addEventListener('click', (e) => {
  e.preventDefault(); */
  /* console.log('click'); */
  /* console.log(e); */
  /* console.log(e.target.className); */
  /* console.log(e.target.id); */
  /* document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
}); */

const myForm = document.querySelector('#my-form');
const myInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    /* alert('Plese enter fields'); */

    setTimeout(() => msg.remove(), 3000);
  }else {
    /* console.log('success'); */

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    //Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}