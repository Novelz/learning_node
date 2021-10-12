/** 
 * To load an npm module we first have to init npm through cmd command npm init.
 * 
 * Most of the questions prompted are useful when creating a new package so they can be skipped.
 * This will create a base package.json file.
 * 
 * Then we have to find the name of the package on the npm module page
 * and install it through `npm install MODULE_NAME`. This will create a package-lock.json
 * 
 * Finally to load and use an npm modules we require it's package name in the js file. */
const validator = require('validator')

console.log(validator.isEmail('test@example.com'))
console.log(validator.isUrl('http://example.com'))