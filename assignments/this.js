/* The for principles of "this";
* In your own words. Explain the four principle for the "this" keyword below.
*
* 1. Window Binding
   When the "this" is used in the global scope, is binds to the window which is basically everything.

* 2. Implicit Binding
   When using dot notation to invoke a function, implicit binding occurs.

* 3. Explicit Binding
   when you use .call(), .bind(), and/or .apply(), explicit binding occurs.

* 4. New Binding
   When using a constructor function, "this" pulls specific information from the object


*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// console.log(this)



// Principle 2

// code example for Implicit Binding

// const user = {
//     name: 'Tyler',
//     greet() {
//       alert(`Hello, my name is ${this.name}`)
//     }
//   }
//  user.greet()



// Principle 3
// code example for New Binding

// function Person (name, favColor) {  
//     this.name = name,
//     this.favColor = favColor
//   }
  
//   const me = new Person(Josi, 27)


// Principle 4
// code example for Explicit Binding

// const sayMyName = function () {
//     console.log('My name is ' + this.name);
//   };

//   const josi = {
//     name: 'Josi'
//   }

//   var sayMyName = sayMyName.bind(josi);
//   sayMyName(); 



