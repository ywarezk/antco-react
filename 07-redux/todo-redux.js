

// Redux playground

// Actions

// actions describe3s what happened in our app
// user clicked a button, timer, server request ... 

// {type: string, payload?: any}
const simpleAction = {type: 'Identifier of the action', payload: 'can be any type'}

const ourAddAction = {type: '[todo] ADD', payload: 'the todo task string'};

// action creator
// function
// goal is to create action
// our action can change from user input A to B to create new action

// {type: 'ADD', payload: 'the todo task string'};
function addTask(todoString) {
    return {type: '[todo] ADD', payload: todoString};
}

// Reducers
// (state, action) => state'
// pure function
// decides what the next state will be
// our state will be divided to chunks
// every reducer is in charge of a single chunk
// { settings: settingsReducer, dashboard: dashboardReducer}
// reducers will also contin their initial state

// function(a) => b

// const array = [];

// function() {array}

const initialState = {
    tasks: []
}

function todoReducer(state = initialState, action) {
    switch(action.type) {
        case '[todo] ADD':
            const newTasks = [...state.tasks];
            newTasks.push(action.payload);
            return {...state, tasks: newTasks};
        // case '[settings] CHANGE': 
        default:
            return state;
    }
}


const initialStateSettings = {
    user : {firstName: 'Yariv', lastName: 'Katz'}
}

// type: '[settings] some-setting-action-name'
function settingsReducer(state = initialStateSettings, action) {
    switch(action.type) {
        case '[settings] CHANGE_USER':
            // changing the state and returning a new state
            return state;
        default:
            return state;
    }
}

// Store
// holds the state of our application
// there is one store in a redux application
// Redux.createStore(reducers)
// store.getState()
// store.dispatch(action)


// {
//     todo: undefined,
//     settings: undefined
// }

const reducerFromSettingsAndTodo = Redux.combineReducers(
    {
        todo: todoReducer,
        settings: settingsReducer    
    }
)

var store = Redux.createStore(reducerFromSettingsAndTodo /*, initialState, middlewares */);

// what if i have multiple reducers?

// return one reducer from multiple reducers
// const singleReducer = Redux.combineReducers( {settings: settingsReducer, dashboard: dashboardReducer} )
// Redux.createStore(singleReducer);

// if we run the app now
// store.getState() => {tasks: []}

// add submit event to form
// capture what the user put in the input
// change the state with store.dispatch(action)

const form = document.getElementById('todo-form');
form.addEventListener('submit', function(event) {
    // grab what the user put in the input
    const inputElement = document.getElementById('todo-input');
    const whatUserTyped = inputElement.value;

    // !!!! how do we change the state !!!!
    store.dispatch(addTask(whatUserTyped));

    event.preventDefault();
});

// the logic of connecting to the state to display something
// varies from framework to framework (library)

// this function will run every state change
store.subscribe(() => {
    // we want to repain the ul
    
    const newState = store.getState();
    const tasks = newState.todo.tasks;
    const ul = document.getElementById('list-of-todos');

    ul.innerHTML = '';

    for (let task of tasks) {
        // <li>{task}</li>
        const newLi = document.createElement('li');
        newLi.textContent = task

        ul.appendChild(newLi);
    }

})






