/**
 * Created by mrlef on 1/9/2017.
 */


//Question 1 - Explain the two strategies for improving JavaScript: ES6 (es2005) + ES7, versus Typescript. -------------
// What does it require to use these technologies: In our backend with Node, and in (many different) Browsers.

/*
 * Es2015 giver javascript features såsom arrow functions, klasser og arv, promises, generators etc.
 - Skal bruge en transpiler for at kunne bruges med nodeJS (medmindre man bruger LTS v6.x).
 * TypeScript er opensource og tilføjer typer til Javascript.
 * Angular2 bliver designet til at blive brugt med Typescript (kan også bruges med es2015).
 - Skal compiles til ES5 på browsersiden.
 - Kan bruges med NodeJS sammen med en typescript compiler.
 */






//Question 2 - Explain about TypeScript, how it relates to JavaScript, the major features it offers and ----------------
//what it takes to develop Server and Client side applications with this technology.

//Som et superset af JavaScript, så er alle eksisterende JS programmer også valide TypeScript programmer.

//TypeScript er open-source. Det er et strict superset af Javascript.
//Det tilføjer bla. type-checking (som også hedder "duck typing") og klasse baseret objekt-orienteret programmering.
//I typescript er det interfaces som navngiver disse typer og det er en måde at lave type kontrakter i koden.
//TypeScript er designet til udvikling af store applikationer og transpiler til JavaScript.


//Question 3 - Provide examples of Interfaces with typescript and explain what is meant by the term --------------------
//"duck-typing".

//Duck-typing er "hvis det ligner en and, og siger quack som en and, så er det en and".


// interface LabelledValue {
//     label: string;
// }
// //printLabel tager en parameter som skal være af slagsen LabelledValue. Ovenfor ser vi LabelledValue skal have en
// //String type some hedder label.
// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
// }
//
// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);


//FOR AT KØRE EKSEMPLET SKAL MAN SKRIVE ts-node ExamQuestion5b.ts i terminalen.


//Question 4 - Provide an example of TypeScript inheritance, involving -------------------------------------------------
// A top-level interface to define the most basic behaviour and types
// The constructor shorthand to automatically create properties
// All of the Access Modifiers public, private and protected (and perhaps also readonly)
// Abstract
// Static (make a counter than counts the total number of instances)


// interface Elev {
//     fag: string;
// }
//
// function skoleFag(elev: Elev){
//     console.log("Elev har denne slags fag: " + elev.fag);
// }
//
// //Man behøver ikke fortælle den at det er en elev. Det har samme struktur som en elev og derfor accepterer den, den som
// //en elev. - Duck-Typing
// var elev = {fag: "Historie"}
// skoleFag(elev);

// // ------------------------ private og protected
// class Person {
//     private name: string;
//     protected lastName: string = "Julemand"
//
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     getName() {
//         return this.name;
//     }
//     getLastName() {
//         return this.lastName;
//     }
// }
//
//
// class Student extends Person {
//     age: number = 20;
//     //Student extender Person og derfor må man gerne setLastName da den har adgang til protected. Private virker ikke.
//     setLastName(name) {
//         this.lastName = name
//     }
// }
//
// // Eksemplet nedenfor virker ikke da name er private
// //var s = new Student("lars").name   .
//
// //Virker da vi har en getter i Person som giver os name.
// var student = new Student("Lars")
// console.log(student.getName())
// console.log(student.age)
// student.setLastName("Eksamen")
// console.log(student.getLastName())



// ------------------------readonly ------------------
//Virker ikke pga typescript version?!
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor (theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.


// // ------------------------abstract-----------------------------
// abstract class Animal {
//     static origin : string = "hello"
//     constructor(protected name: string) {
//     }
//
//     //absctract gør at man er nødt til at implementere den abstrakte metode i den klasse som arver.
//     abstract makeSound(input: string): string;
//
//     move(meters) {
//         console.log(this.name + " moved " + meters + "m.");
//     }
// }
//
// class Snake extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//
//     makeSound(input: string): string {
//         return "sssss" + input;
//     }
//
//     move(m) {
//
//         console.log("Slithering...");
//         super.move(m);
//     }
// }
// var c = new Snake("snakey snake")
// console.log(c.makeSound("Buddy"))
// c.move(10)




// ------------------------static ---------------------------
//??!?








//Question 5 - Explain TypeScript Generics, the problems they solve, and provide examples of your ----------------------
// own generic functions and classes.
// let numberList: Array<number> = [1, 2, 3]; // man kan ikke skrive en string her
// let stringList: Array<string> = ["Hello", "World"];
// console.log(numberList)

// Why Generics
// Some bugs are easier to detect than others. Compile-time bugs, for example,
// can be detected early on; you can use the compiler's error messages to figure out what the problem
// is and fix it, right then and there.
//
// Runtime bugs, however, can be much more problematic; they don't always surface immediately,
// and when they do, it may be at a point in the program that is far removed from the actual cause of the problem
//
// Generics add stability to our code by making more of our bugs detectable at compile time
// They helps us to maximize code reuse
// They helps us to maximize type safety and performance
// We can now create Generic Collection Classes
// We create generic interfaces, classes, functions, promises etc




//--------------------generic function of the type number
// function identity(arg: number): number {
//     return arg;
// }


// //her laver vi en klasse hvor vi siger at når man instantierer den, fortæller man den selv hvilken slags type det skal være.
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }
//
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 25;
// myGenericNumber.add = function(x, y) { return x + y; };
//
// console.log(myGenericNumber.add(myGenericNumber.zeroValue, 50));









//Question 6 - Explain (some) of the purposes with a tool like WebPack, using a simple proof of ------------------------
// concept example

//Webpack is module bundling. Feks. istedet for at importere alle .js filerne på index siden gennem <script> tags
//kan man bare importere ens bundle.
//kør webpack fra terminalen (skriv webpack) og åben index.html siden.