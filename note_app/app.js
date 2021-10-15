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
	builder: {
		'title' : {
			describe: 'The title of the note to remove',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => {
		notes.removeNote(argv.title)
	}
})

//Create read command
yargs.command({
	command: 'read',
	describe: 'Read the content of a note',
	builder : {
		title: {
			describe : 'The title of the note to read',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => {
		notes.readNote(argv.title)
	}
})

//Create list command
yargs.command({
	command: 'list',
	describe: 'List all the notes',
	handler: () => {
		notes.listNotes()
	}
})


// Initialize yargs parsing
yargs.parse()