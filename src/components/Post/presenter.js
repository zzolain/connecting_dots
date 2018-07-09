import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.css';

const Post = props => (
    <div className="Post">
        <div className="title">
            <input
                type="text"
                onChange={e => props.handleChange(e.target.value, 'title')}
            />
        </div>
        <ReactQuill
            value={props.content}
            onChange={e => props.handleChange(e, 'content')}
            theme="snow"
            placeholder={'여기에 적어유...'}
        />
        <div className="buttons">
            <button>Cancel</button>
            <button onClick={props.handleSubmit}>OK!</button>
        </div>
    </div>
);

export default Post;
