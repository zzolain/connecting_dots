import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NoteList extends Component {
  constructor(props) {
  	super(props)
  	this.noteContent = props.noteContent
    this.noteId = props.noteId
    this.handleRemoveNote = this.handleRemoveNote.bind(this)
  }
  handleRemoveNote(id) {
    this.props.removeNote(id)
  }
  render() {
  	return (
  		<div className="note__list">
        <span
          className="note__list__removeBtn"
          onClick={ () => this.handleRemoveNote(this.noteId)}>
          &times;
        </span>
  			<p className="note__content">{ this.noteContent }</p>
  		</div>
  		)
  }
}

NoteList.propTypes = {
  noteContent: PropTypes.string
}
