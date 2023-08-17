import React, { useState } from 'react';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'
import NotesList from  '../../components/NotesList/NotesList'

export default function NewNotePage () {
  const [notes, setNotes] = useState([]);
  const handleNoteAdded = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <>
      <h2>New Note Page</h2>
      <NewNoteForm onNoteAdded={handleNoteAdded} />
      <NotesList notes={notes} />
    </>
  );
};
