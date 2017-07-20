import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {});

ReactDOM.render(
<Provider store={store} >
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
