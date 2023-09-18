// alert("Hello World! Happy Learning JavaScript!😊");

// alert("Hello")

// [1, 2].forEach(alert);

// variables - store data
// let message = "Hello Jay!";
// alert(message);

// let name = "Jay", age = "27", occupation = "motivational speaker";
// better practice
// let name = 'Jay';
// let age = 27;
// let occupation = 'motivational speaker';

// alert(name);
// alert(age);
// alert(occupation);


// functions
// // function declaration
// function add(a, b){
//     return a+b;
// }
// alert(`Addition: ${add(5,2)}`);

// // function expression
// let sum = function (a, b) {
//     return a+b;
// };

// alert(`Sum: ${sum(7,9)}`);


// Arrow functions

// let sum = (a, b) => a + b;

// alert(sum(9,8));


// Objects

// let user = {
//     name: 'Jon',
//     age: 29
// };

// alert(user.name);
// alert(user.age);

// user["likes birds"] = true;

// console.log(user);


// Class

// class User {
//     constructor(name){
//         this.name = name;
//     }

//     sayHi(){
//         alert(this.name);
//     }
// };

// Usage
// let user = new User("John");
// user.sayHi();


// Callbacks

// function loadScript(src, callback){
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(); // onload executes function after script is loaded
//     document.head.append(script);
// }

// loadScript("script1.js", script = () => {
//     alert("Script is loaded!!!");
// });


// Promise

// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("Done!"), 1000);
//     // setTimeout(() => reject(new Error("Whoops!"), 1000));
// })

// promise.then(
//     result => alert(result),
//     error => alert(error)
// );

// Promise chaining

// new Promise(function(resolve, reject){
//     setTimeout(() => resolve((1), 1000));
// }).then(function(result){
//     alert(result);
//     return result * 2;
// }).then(function(result){
//     alert(result);
//     return result* 2;
// }).then(function(result){
//     alert(result);
//     return result* 2;
// });

// Promise use case

// fetch("sample.json")
//     .then(function(response){
//         return response.text();
//     })
//     .then(function(text){
//         alert(text);
//     });


// fetch github profile pic
/*
fetch("sample.json")
.then(response => response.json())
.then(user => fetch(`https://api.github.com/users/${user.name}`))
.then(response => response.json())
.then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 3000);
});
*/

// Async await
/*
async function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 3000);
    });

    let result = await promise;

    alert(result);
}

f();
*/

// Github profile using async await

/*
async function showAvatar(){
    // read json
    let response = await fetch("sample.json");
    let user = await response.json();

    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // show avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise avatar example";
    document.body.append(img);

    // wait 3 sec
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();
*/

// ES6
// Spread operator - converts list into array
/*
let SumElements = (...arr) => {
    console.log(arr);
    let sum = 0;
    for(let element of arr){
        sum += element;
    }
    console.log(sum);
}

SumElements(1,2,3,4,5);
*/

// Map
/*
let map = new Map();
map.set("name", "Jon");
map.set("id", "123");
map.set("skills", ['js', 'sql']);

console.log(map.get('name'));
console.log(map.get('id'));
console.log(map.get('skills'));
console.log(map.size);
console.log(map.keys());
console.log(map.values());

for(let key of map.keys()){
    console.log(key);
}
*/

// Sets - store unique values of any type
/*
let set = new Set();

set.add('a');
set.add('b');
set.add('b');

for( let ele of set){
    console.log(ele);
}

console.log(set.size);
console.log(set.has('c'));
*/


// Statis methods
/*
class Example {
    static Call(){
        console.log('Static method');
    }
}

Example.Call();
*/


// Getters and setters
/*
class Person {
    constructor(name){
        this.name = name;
    }

    get Name(){
        return this.name;
    }

    set Name(name){
        this.name = name;
    }
};

let person = new Person("Jon Snow");
console.log(person.Name);
person.Name = "Robb Stark";
console.log(person.Name);
*/


// Global Scope
/*
var name = "JAY";

console.log(name);

function Name(){
    console.log(name);
}

Name();
*/


// Closures

// function greet() {
//     name = 'Hammad';
//     return function () {
//         console.log('Hi ' + name);
//     }
// }

// greet()(); // nothing happens, no errors

// the returned function from greet() gets saved in greetLetter
// greetLetter = greet();

 // calling greetLetter calls the returned function from the greet() function
// greetLetter(); // logs 'Hi Hammad'


// Private Scope
/*
(function () {
    // private scope
    console.log('private scope');
})();
*/


// Module Pattern
/*
var Module = (function() {
    function privateMethod(){
        console.log('inside private method');
    }

    return {
        publicMethod: function(){
            // can call privateMethod
            privateMethod();
        }
    };
})();

Module.publicMethod();
Module.privateMethod();
*/


// this keyword
/*
function getThis() {
    return this;
}
  
const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };
  
obj1.getThis = getThis;
obj2.getThis = getThis;
  
console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
  

const obj3 = {
    __proto__: obj1,
    name: "obj3",
};
  
console.log(obj3.getThis()); // { name: 'obj3' }
  
const obj4 = {
    name: "obj4",
    getThis() {
      return this;
    },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }
*/

// method -> this reference to current object
/*
const video = {
    title: 'Harry Potter',
    tags: ['1', '2', '3'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();
*/

// function -> this reference to window object
// function playVideo(){
//     console.log(this);
// }
// playVideo();

// Constructor function
// function Video(title){
//     this.title = title;
//     console.log(this);
// }

// let v = new Video('Potter');


// Prototypes
/*
function Human(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

var person = new Human('Virat', 'Kohli');
console.log(person);
console.log(Human.prototype);

// add property to prototype
Human.prototype.age = 32;
// Human.prototype['age'] = 29;
console.log(person.age);
*/

// To solve constructor function problem and prototype problem
// We define object specific properties inside constructor
// and shared properties inside prototype

/*
// Define object specific properties
function Human(name, age) {
    this.name = name,
    this.age = age,
    this.friends = ['Jadeja', 'Raina']
}

// all shared properties
Human.prototype.sayName = function() {
    console.log(this.name);
}

var person1 = new Human('Virat', 29);
var person2 = new Human('Dhoni', 35);

// check whether shared properties are same or not
console.log(person1.sayName === person2.sayName);

person1.friends.push('Sachin');
console.log(person1.friends);
console.log(person2.friends);
*/


// Coomon JS functions

// slice()
// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// const citrus = fruits.slice(1,3);
// console.log(citrus);

// const myBest = fruits.slice(-3, -1);
// console.log(myBest);

// Math
