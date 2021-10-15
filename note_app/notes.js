/**
 * # Simple app for the management of notes through the cli
 * 
 */

const fs = require('fs')
const chalk = require('chalk')
const log = console.log

const getNotes = () => {
	return "Your notes..."
}

// take the content of notes.json, update it and then write the new content in the file
const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNotes = notes.filter((note) => {
		return note.title === title
	})

	if (duplicateNotes.length === 0) {
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)
		log(chalk.green('New note added'))
	} else {
		log(chalk.yellow('Note already existing'))
	}
}

const removeNote = (title) => {
	const notes = loadNotes()
	//keep only the note with a different title
	const notesToKeep = notes.filter((note) => {
		return note.title !== title
	})

	//if the notesToKeep are the same of the original array
	if(notesToKeep.length === notes.length) {
		log(chalk.red.inverse('No note to remove'))
	} else {
		//write the notesToKeep in the file
		saveNotes(notesToKeep)
		log(chalk.green.inverse('Note removed'))
	}
}

//save to the notes.json file the updated notes object
const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)
}

//get the content of the notes.json file or return an empty array if an error occurred
const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (error) {
		return []
	}
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote
}