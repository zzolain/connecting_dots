import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './script.js';
import Container from './Container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
