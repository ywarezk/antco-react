

function Login() {
    return (
        <form>
           <input type="email" name="email" placeholder="email" /> 
           <input type="password" name="password" placeholder="password" /> 
        </form>
    )
}


// const h1 = document.createElement('h1');

// const div = React.createElement('div', undefined, 
//     React.createElement('h1', undefined, 
//         React.createElement('span', undefined, 'hello world wrapped in div')));

const div = <div><h1><span> hello world with jsx</span></h1></div>

// h1.innerText = 'hello world';

// const div = document.getElementById('container');
// div.appendChild(h1);


ReactDOM.render(<Login />, document.getElementById('container'))

// jsx

//const h1Two = <h1>hello world with react</h1> // React.createElement(...)

// using react place an h1 tag inside the container div
// <div><h1><span>hello world with react</span></h1></div>
