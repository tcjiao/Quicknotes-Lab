const Note = require('../../models/Note');

module.exports = {
    createNote
  };

async function createNote (req, res) {
  try {
    const { text } = req.body;
    const newNote = await Note.create({ text: text, user: req.user });
    console.log(newNote);
    res.status(201).json({ newNote });
  } catch (error) {
    res.status(500).json({ message: 'Error creating note' });
  }
};