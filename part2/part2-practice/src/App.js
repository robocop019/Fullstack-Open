import React, { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'

const App = () => {
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('new note...')
	const [showAll, setShowAll] = useState(true)

	useEffect(() => {
		noteService
			.getAll()
			.then(initialNotes => {
				setNotes(initialNotes)
			})
	}, [])


	const notesToShow = showAll ? notes : notes.filter((note) => note.important)

	const showImportantNotes = () => {
		setShowAll(!showAll)
	}

	const handleNoteChange = (event) => {
		setNewNote(event.target.value)
	}

	const toggleImportanceOf = (id) => {
		const note = notes.find(n => n.id === id)
		const changedNote = { ...note, important: !note.important }
		
		noteService
			.update(id, changedNote)
			.then(returnedNote => {
				setNotes(notes.map((note) => note.id !== id ? note : returnedNote))
			})
			.catch(error => {
				alert(`The note '${note.content}' has been removed from the server`)
				setNotes(notes.filter(n => n.id !== id))
			})
	}

	const addNote = (event) => {
		event.preventDefault()
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5
		}

		noteService
			.create(noteObject)
			.then(returnedNote => {
				setNotes(notes.concat(returnedNote))
				setNewNote('')
			})
	}

	return (
		<div>
			<h1>Notes</h1>

			<div>
				<button onClick={showImportantNotes}>
					Show {showAll ? 'Important' : 'All'}
				</button>
			</div>

			<ul>
				{notesToShow.map((note) => (
					<Note
						key={note.id}
						note={note}
						toggleImportance={() => toggleImportanceOf(note.id)}
					/>
				))}
			</ul>

			<form onSubmit={addNote}>
				<input onChange={handleNoteChange} value={newNote} />
				<button type="submit">Save</button>
			</form>
		</div>
	)
}

export default App
