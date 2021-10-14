const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

const log = console.log
const command = process.argv[2]

//Custom version
yargs.version('1.0.1')

//Custom commands [add, remove, read, list]

//Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		'title' : {
			describe: 'Note title',
			demandOption: true, // --> required argument (default to false)
			type: 'string'
		},
		'body' : {
			describe: 'Note content',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => {
		notes.addNote(argv.title, argv.body)
	}
})

//Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: () => {
		log('Removing a note')
	}
})

//Create read command
yargs.command({
	command: 'read',
	describe: 'Read the content of a note',
	handler: () => {
		log('This is the content of your note')
	}
})

//Create list command
yargs.command({
	command: 'list',
	describe: 'List all the notes',
	handler: () => {
		log('These are all the notes available')
	}
})


// Initialize yargs parsing
yargs.parse()