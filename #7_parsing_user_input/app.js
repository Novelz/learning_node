/**
 * # Parse user input
 * 
 * If the parameter submitted by the user are in the format --flag_name="argument_value"
 * the process package wont parse them for us 
 * 
 * To parse them and access them in an easier way, we can use yargs
 */
const yargs = require('yargs') 

//console.log(yargs.argv)

/**
 * Terminal command
 * > node app.js --title="Simple Title" --content="Simple content"
 * 
 * to access the terminal arguments we can use `yargs.argv`
 * and yargs automatically parse the parameters in an object with 'title' and 'content' properties
 * Result:
 * 	{
 *		_: [ 'add' ],
 *		title: 'Simple Title',
 *		content: 'Simple content',
 *		'$0': 'app.js'
 *	}
 **/ 


/** 
 * Another way to gain more control on the arguments is to define command arguments and "command-parameter" arguments
 * Commands can be invoked from the cli if defined in the application and every command can receive some dedicated parameters
*/

//Create a cli command that print the name of user as submitted
yargs.command({
	command: 'say_my_name', // --> command name
	describe: 'Return your name', // --> command description [optional]
	// builder is the property where we define all the parameter that the command can receive
	builder: {
		'name': {
			describe: 'Your name',
			demandOption: true, // --> set the parameter as required [default false]
			type: 'string' // --> define the type of the argument
		}
	},
	// the handler is the function that has to be called when the command is invoked
	// we pass the argv parameter so we can access what the user submitted in the cli
	handler: (argv) => {
		console.log('Your name is: ' + argv.name)
	}
})

//initialize yargs parsing -- REQUIRED
yargs.parse()

//To use the command write the following in the cli
// > node app.js say_my_name --name="John Doe"