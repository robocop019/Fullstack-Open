import React, {useState} from 'react'
import Note from './components/Note'

const App = (props) => {
	const [notes, setNotes] = useState(props.notes)
	const [newNote, setNewNote] = useState('new note...')
	const [showAll, setShowAll] = useState(true)

	const notesToShow = showAll ? notes : notes.filter(note => note.important)

	const showImportantNotes = () => {
		setShowAll(!showAll)
	}

	const handleNoteChange = (event) => {
		console.log(event.target.value)
		setNewNote(event.target.value)
	}

	const addNote = (event) => {
		event.preventDefault()
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
			id: notes.length + 1,
		}

		setNotes(notes.concat(noteObject))
  		setNewNote('')
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
					<Note key={note.id} note={note} />
				))}
			</ul>

			<form onSubmit={addNote}>
				<input
					onChange={handleNoteChange}
					value={newNote}
				/>
				<button type='submit'>Save</button>
			</form>
		</div>
	)
}

export default App