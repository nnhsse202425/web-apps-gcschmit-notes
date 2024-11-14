"use strict"; // enable modern Javascript modifications

/**********************************************************
 * Objects
 **********************************************************/

/**
 * Object construction
 *  objects can be constructed in a couple of ways
 *  properties can be added to objects after construction
 */

// create an empty object with object constructor syntax
let journalEntry = new Object();

// create an empty object with object literal syntax
journalEntry = {};

// create an object with properties (key-value pairs) in JSON format
//  objects may contain methods
journalEntry = {
  date: "2024-11-12",
  habitOfMind: "Applying Past Knowledge to New Situations",
  content:
    "By comparing and contrasting Javascript objects to Java objects, " +
    "I am strengthening my understanding",
  getLength() {
    return this.content.length; // this refers to the object, similar to Java
  },
};

console.log(journalEntry);
console.log(typeof journalEntry);
console.log(journalEntry.getLength());
