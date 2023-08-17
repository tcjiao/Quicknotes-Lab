import React, { useState } from 'react';

export default function NewNoteForm ({ onNoteAdded }) {
    const [noteText, setNoteText] = useState('');

    const handleAddNote = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: noteText })
        });
  
        if (response.ok) {
          const data = await response.json();
          onNoteAdded(data.newNote);
          setNoteText('');
        } else {
        }
      } catch (error) {
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    );
};

