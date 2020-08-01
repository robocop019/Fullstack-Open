import React, { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'
import Notification from './components/Notification'

const App = () => {
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('new note...')
	const [showAll, setShowAll] = useState(true)
	const[errorMessage, setErrorMessage] = useState(null)

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
				setErrorMessage(`Note '${note.content}' was already removed from server`)
				setTimeout(() => {
				setErrorMessage(null)
				}, 5000)
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

	const Footer = () => {
		const footerStyle = {
		  color: 'green',
		  fontStyle: 'italic',
		  fontSize: 16
		}
	  
		return (
		  <div style={footerStyle}>
			<br />
			<em>Note app, Department of Computer Science, University of Helsinki 2020</em>
		  </div> 
		)
	  }

	return (
		<div>
			<h1>Notes</h1>

			<Notification message={errorMessage} />

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

			<Footer />
		</div>
	)
}

export default App
