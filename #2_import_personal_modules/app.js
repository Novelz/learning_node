/**
 * # How to import custom modules
 * 
 * Require a personal module and use it in this main file
 * 
 * Terminal command:
 * > node app.js
 */
const getNotes = require('./notes.js')

console.log(getNotes())
