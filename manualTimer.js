///event

class ManualIncreament extends React.Component {

    constructor(props) {
        super(props)
        this.state = { num: 0 }
        this.Increment = null
    }
    componentDidMount() {
        this.Increment = window.setInterval(this.increment.bind(this), 1000);
    }
    componentwillUnMount() {
        window.clearInterval(this.Increment)
    }
    increment(e) {
        this.setState((state, props) => ({ num: this.state.num + 1 }))
    }
    pause() {
        window.clearInterval(this.Increment)
        this.setState((state, props) => ({ num: this.state.num }))
    }
    render() {
        console.log(this.state.num)
        return <div>valeur {this.state.num} <button onClick={this.pause.bind(this)}>pause</button></div>
    }

}
function Home() {
    return <div><ManualIncreament></ManualIncreament></div>

}
ReactDOM.render(<Home></Home>, document.querySelector("#app"))