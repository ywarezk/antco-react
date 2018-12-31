// jsx lesson

function alertHelloWorld(event) {
    alert('hello world');
}

function consoleLogHelloWorld(msg) {
    console.log(msg);
}

const h1 = <h1>hello world with jsx2</h1> // React.createElement

// props => {'message': 'hello world from parent'}
function Hello(props) {
    const stamFunction = () => {
        return [1,2,3]
    }

    const isHello = true;

    // ul li
    const todoTasks = ['buy soya milk', 'buy saten', 'but tofu', 'walk piglet']

    // <ul><li>buy soya mil</li> ... </ul>

    return (
        <React.Fragment>
            <form noValidate></form>
            <h1 id="yariv" className="hello">hello from hello function - {props.message}</h1>
            <h5 id={Math.random()}>another message {Math.random()}</h5>
            <h5>{<span>fdhgdfg</span>} {props.foo.hello}</h5>
            <h5>{ Date.now() }</h5>
            {/* <h5>
                {[1, 'hello', <span>hello from span</span>]}
            </h5> */}
            {
                // error
                // if (isHello) {
                //     return 'hello'
                // }
            }
            {
                // for(...) {

                // }
            }
            {
                stamFunction()
            }
            {
                (function() {
                    if (isHello) {
                        return <h1>hello from self invoked function</h1>
                    } else {
                        return null;
                    }
                })()
            }
            {
                isHello ? <h1>oneline if</h1> : 10
            }
            <ul>
                {
                    (function(){
                        // we want this function to return [<li>dfgfd</li>]
                        const lisArray = [];
                        let counter = 0;
                        for(let item of todoTasks){
                            const li = <li key={counter.toString()}>{item}</li>
                            counter++;
                            lisArray.push(li)
                        }
                        return lisArray;
                    })()
                }
            </ul>

            <ul>
                {
                   todoTasks.map((taskAsString, index) => <li key={index.toString()}>{taskAsString}</li>)     
                }
            </ul>                
            <button onClick={alertHelloWorld}>
                click me
            </button>

            {/* <div onMouseOver={() => consoleLogHelloWorld('hello world from mouse over')}> */}
            <div onMouseOver={function(event) { return consoleLogHelloWorld('hello world from mouse over') } }>
                hover me
            </div>
        </React.Fragment>
    );
}

ReactDOM.render(<Hello message="hello world from parent" foo={ {hello: 'world'} } />, document.getElementById('container'));