import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import Container from './Container';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducer)}>
<Container />
</Provider>, document.getElementById('root'));
registerServiceWorker();
