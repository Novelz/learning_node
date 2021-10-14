/**
 * # How to import base modules
 * 
 * If we are working or exporting a module we can use the syntax import {function_A, function_B, ..., function_n} from 'module_name'
 * In this case:
 *         import {writeFileSync, appendFileSync} from 'fs'
 * and then use it as a single function without the prefix with the const name es:
 *  writeFileSync('filename', 'hello, world!')
 * 
 * Terminal command:
 * > node app.js
 * 
*/
const fs = require('fs')

try {
	fs.writeFileSync('notes.txt', 'File created with Node.js')
	fs.appendFileSync('notes.txt', ' - Text added later with "appendFileSync"')
} catch (error) {
	console.log(error)
}