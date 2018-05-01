import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './Styles/Styles.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Redux/reducer'
import{Provider} from 'react-redux'
import App from './Components/App'
import thunk from 'redux-thunk'
import {database} from './Database/config'



const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)) 

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));


