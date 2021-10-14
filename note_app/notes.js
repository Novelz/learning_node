const fs = require('fs')

const getNotes = () => {
	return "Your notes..."
}

// take the content of notes.json, update it and then write the new content in the file
const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateMotes = notes.filter((note) => {
		return note.title === title
	})

	if (duplicateMotes.length === 0) {
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)
		console.log('New note added')
	} else {
		console.log('Note already existing')
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
	addNote: addNote
}