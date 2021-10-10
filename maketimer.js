class Welcome extends React.Component {

    render() {
        return <div>
            <h1>Bonjour {this.props.name}</h1>
            <p>{this.props.children}</p>
        </div>
    }

}
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
        this.color = { color: "green" }
        this.timer = null

    }
    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000);
    }


    componentwillUnMount() {
        window.clearInterval(this.timer)
    }
    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        /* console.log(this.timer) */
        return <div style={this.color}>il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()} </div>
    }
}

class Increment extends React.Component {
    constructor(props) {
        super(props)
        this.state = { NUMBER: props.start }

        this.Increment = null
        console.log(props)
    }

    componentDidMount() {
        this.Increment = window.setInterval(this.increment.bind(this), 1000);
    }


    componentwillUnMount() {
        window.clearInterval(this.Increment)
    }
    increment() {
        this.setState((state, props) => ({ NUMBER: this.state.NUMBER + props.step }))
    }
    render() {

        return (
            <div>{this.state.NUMBER}

            </div>
        )
    }

}
Increment.defaultProps = {
    start: 0,
    step: 1,
};
function Home() {
    return <div>
        <Welcome name="tiko"></Welcome>
        <Welcome name="lolo"></Welcome>
        <Clock></Clock>
        <Increment start={10}></Increment>
        <Increment start={100} step={5}></Increment>
    </div>
}

ReactDOM.render(<Home></Home>, document.querySelector("#app"))