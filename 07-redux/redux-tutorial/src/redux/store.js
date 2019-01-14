/**
 * We want to create the redux store in here
 */

// Redux.createStore
import { createStore, applyMiddleware, combineReducers } from 'redux';
import todoReducer from './todo-reducer';
import serverReducer from './server-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    todo: todoReducer,
    server: serverReducer
});

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
export default createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk),
// other store enhancers if any
));

//export default createStore(todoReducer);