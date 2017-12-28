import React, { Component } from 'react'
import './style.css'
import NoteList from './note_list'
import NoteForm from './note_form'
import { DB_CONFIG } from '../../Config/config'
import * as firebase from 'firebase'

export default class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
    this.addNote = this.addNote.bind(this)
    this.removeNote = this.removeNote.bind(this)
    this.app = firebase.initializeApp(DB_CONFIG)
    this.database = this.app.database().ref().child('timeLine')
  }

  componentWillMount() {
    const previousNotes = this.state.notes

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent
      })
      this.setState({
        notes: previousNotes
      })
    })

    this.database.on('child_removed', snap => {
      for (let i = 0; i < previousNotes.length; i++) {
        if (previousNotes[i].id === snap.key) {
          previousNotes.splice(i, 1)
        }
      }
      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note) {
    this.database.push().set({ noteContent: note })
  }

  removeNote(noteId) {
    this.database.child(noteId).remove()
  }

  render() {
    return (
      <div className="note">
        <div className="note__wrappper">
          <div className="note__header">
            <div className="note__heading"><h1>React & Firebase To-Do List</h1></div>
          </div>
          <div className="note__body">
            {
              this.state.notes.map(note => {
                return (
                  <NoteList
                    noteContent={note.noteContent}
                    noteId={note.id}
                    key={note.id}
                    removeNote={this.removeNote}
                  />
                )
              })
            }
          </div>
          <div className="note__footer">
            <NoteForm addNote={this.addNote} />
          </div>
        </div>
      </div>
    )
  }
}

