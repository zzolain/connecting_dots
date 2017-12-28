import React, { Component } from 'react'

export default class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newNoteContent: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.writeNote = this.writeNote.bind(this)
  }

  handleUserInput(e) {
    this.setState({
      newNoteContent: e.target.value
    })
  }
  writeNote() {
    this.props.addNote(this.state.newNoteContent)
    this.setState({
      newNoteContent: ''
    })
  }
  render() {
    return (
      <div className="note__form__wrapper">
        <input className="note__input"
          placeholder="Write a new note..."
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}
        />
        <button className="note__button"
          onClick={this.writeNote}>
          Add Note
        </button>
      </div>
    )
  }
}
