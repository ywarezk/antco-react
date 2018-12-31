// react components

//  a group of react elements

// we can place react component using function



function Child(props) {
    return (
        <h1>hello component tutorial</h1>
    )
}

// lifecycle creating
// lifecycle hooks - updating
// destroying


class Hello2 extends React.Component {
    state = {
        isShow : false,
        emailError: null, // 'the email is invalid'     
        complexObj: {foo: 'bar', hello: 'world'}
    }

    constructor(props) {
        super(props);
        this.state = {
            isShow : true
        }

        this.buttonRef = React.createRef();

        // this.toggleIsShow = this.toggleIsShow.bind(this);
    }
    
    toggleIsShow = () => {
        // toggle the isShow state

        // if our state change not depends on the previous state
        this.setState({
            isShow: true,
            complexObj: {nerdeez: 'yariv'}
        });

        // this.setState({
        //     isShow: !this.state.isShow,
        //     complexObj: {nerdeez: 'yariv'}
        // }) // wrong


        // right way
        this.setState((prevState) => {
            return {
                isShow: !prevState.isShow
            }
        });

        this.setState({});

        this.forceUpdate();
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            console.log('safads')
        }, 1000);
        // will run when the component is placed on the DOM
        // server calls
        // subscribing
        // event listeners
        // timers
        // this.setState is ok
    }

    /**
     * if the change is the state or props should cause the compontn
     * to draw itself
     * @returns: {boolean}
     */
    shouldComponentUpdate(prevProps, prevState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        // this.setState
    }

    componentWillUnmount() {
        // react will call this before cleaning our component
        clearInterval(this.intervalId);
    }

    /**
     * determines how our component look like
     */
    render() {
        // props will be part of this
        const {obj} = this.props;
        // const obj = this.props.obj

        return (
            <div>
                <h1>hello component tutorial - {this.props.obj.foo}</h1>
                <button ref={this.buttonRef}  onClick={this.toggleIsShow}>
                    toggle text
                </button>
                {
                    this.state.isShow ? <h5>
                        now you see me!
                    </h5> : null
                }

                <Child />
            </div>            
        )
    }
}


class PerofrmanceHello extends React.PureComponent {
    render() {
        return <h1>{this.props.message}</h1>
    }
}

ReactDOM.render(<Hello2 obj={ {foo: 'bar'} } />, document.getElementById('container'));