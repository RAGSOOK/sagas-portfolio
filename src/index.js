import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
//axios for server talking
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_TAGS', fetchTags);
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('SEND_PROJECT', sendProject);
    yield takeEvery('DELETE_PROJECT', deleteProject);
}

//Gets all tags from server and sends them to tags reducer
function* fetchTags(action) {
    try {
        const tags = yield axios.get('/tags');
        const nextAction = { type: 'SET_TAGS', payload: tags.data };
        yield put(nextAction);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

//Gets all Projects from server and sends them to Projects reducer
function* fetchProjects(action) {
    try {
        const projects = yield axios.get('/projects');
        const nextAction = { type: 'SET_PROJECTS', payload: projects.data };
        yield put(nextAction);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

//sends a new project to server
function* sendProject(action) {
    try{
        yield axios.post('/projects', action.payload);
        const nextAction = { type: 'FETCH_PROJECTS' };
        yield put(nextAction);
    } catch (error) {
        console.log('There is error in POST', error);
    }
}

//Sends an id of a project to the server to delete
function* deleteProject(action) {
    const id = action.payload;
    try{
        yield axios.delete(`/projects/${id}`);
        const nextAction = { type: 'FETCH_PROJECTS' };
        yield put(nextAction);
    } catch (error) {
        console.log('There is error in DELETE', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const defaultState = [{id: 0,
                       name: ''}];

const tags = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
