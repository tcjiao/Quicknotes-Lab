const Note = require('../../models/Note');

module.exports = {
    createNote
  };

async function createNote (req, res) {
  try {
    const { text } = req.body;
    console.log(req.user);
    const newNote = await Note.create({ text: text, user: req.user });
    res.status(201).json({ newNote });
  } catch (error) {
    res.status(500).json({ message: 'Error creating note' });
  }
};