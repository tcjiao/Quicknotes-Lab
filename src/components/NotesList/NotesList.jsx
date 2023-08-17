import React from 'react';

const NotesList = ({ notes }) => {
    return (
      <div>
        <h3>Notes List</h3>
        {notes.length === 0 ? (
          <p>No notes yet.</p>
        ) : (
          <ul>
            {notes.map((note, index) => (
              <li key={index}>
                <p>Created at: {new Date(note.createdAt).toLocaleString()}</p>
                <p>{note.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default NotesList;