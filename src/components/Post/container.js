import React, { Component } from 'react';
import { database } from '../../config/fb';
import Post from './presenter';

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
        }
    }
    handleChange = (value, field) => {
        this.setState({ [field]: value })
    };
    handleSubmit = () => {
        const { title, content } = this.state;
        const newPostKey = database.ref().child('Posts').push().key;
        database.ref(`Posts/${newPostKey}`).set({
            createdAt: new Date().getTime(),
            title,
            content,
        })
    };
    render () {
        return (
            <Post
                {...this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />)
    }
}

export default Container;
