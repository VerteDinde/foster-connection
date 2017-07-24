import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  {
    locations: [ 
      {
        name: 'tea shop',
        address: 'cool place',
        rating: '5 star'
      },
      {
        name: 'tea shop2',
        address: 'cool place',
        rating: '5 star'
      },
      {
        name: 'tea shop3',
        address: 'cool place',
        rating: '5 star'
      }
    ],
    filteredLocations: [],
    locationTypes: [],
    user: false,
    formSubmit: false
  },
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
<Provider store={store} >
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
