/**
 * Require a personal module that export just 1 function
 * and use it in this main file
 */
const getNotes = require('./notes.js')

console.log(getNotes())
