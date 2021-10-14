/**
 * # Store date in a JSON file
 * 
 * We are going to take the data submitted by the user and save it in JSON file
 * @param {String} name -> the name of the user
 * 
 * Terminal commands:
 * > node app.js --name="INSERT_NAME"
 * 
 */
const fs = require('fs')
const yargs = require('yargs')

const args = yargs.argv
const userName = args.name

try {
	const userJSON = JSON.stringify({ "name": userName })
	fs.writeFileSync('data.json', userJSON)
	console.log('Username saved')
} catch (error) {
	console.error('Username not saved!')
}

yargs.parse()