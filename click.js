class Home extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.input = React.createRef()
    }

    handleClick(e) {
        console.log(e)
    }
    render() {
        return <div>
            <input type="text" ref={this.input} />
            <button onClick={this.handleClick}>TESTTER</button>
        </div>
    }
}
ReactDOM.render(<Home></Home>, document.getElementById("app"))