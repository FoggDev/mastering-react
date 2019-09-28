import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import './Notes.css';

class Notes extends Component {
  state = {
    notes: [
      {
        id: 1,
        title: 'My note 1'
      },
      {
        id: 2,
        title: 'My note 2'
      },
      {
        id: 3,
        title: 'My note 3'
      },
    ]
  };

  renderNotes = notes => (
    <ul>
      {notes.map(({ id, title }) => (
        <li key={`note-${id}`}>
          <Link to={`/notes/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  )

  render() {
    const { notes } = this.state;
    const {
      match: {
        params: {
          noteId
        }
      }
    } = this.props;

    let selectedNote = null;

    if (noteId > 0) {
      selectedNote = notes.filter(note => note.id === Number(noteId));
    }

    return (
      <div className="Notes">
        <h1>Notes</h1>

        {this.renderNotes(selectedNote || notes)}
      </div>
    );
  }
}

Notes.propTypes = {
  match: shape({
    params: shape({
      noteId: string
    })
  })
};

export default Notes;
