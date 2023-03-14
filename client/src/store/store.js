import {applyMiddleware, createStore,compose} from 'redux'
import reduxThunk from 'redux-thunk'
import countReducer from './reducers/counterReducer';
// import {listOfRed} from './reducers';
// import countReducer from './reducers/counterReducer';
const initState={};
const enhanser= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store =createStore(countReducer,initState,enhanser(applyMiddleware(reduxThunk)));


export default store

