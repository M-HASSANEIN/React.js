
class Label extends React.Component {
    constructor(props) {
        super(props)
        this.state = { color: "blue" }
        this.value = { value: "solution" }
        console.log(this.value)
    }
    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }} >{this.value.value}</h1>
            </div>
        )
    }

}
ReactDOM.render(<Label > </Label>, document.querySelector("#app"))



