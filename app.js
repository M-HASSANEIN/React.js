/* function Toto({ name, children }) {
     console.log(props)
    return <div>
        <h1>welcome {name}</h1>
        <p>{children}</p>
    </div>

} */
class Toto extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {

        return <div>
            <h1>welcome {this.props.name}</h1>
            <p>{this.props.children}</p>
        </div>
    }
}


ReactDOM.render(<Toto name="tito" >koko could you please </Toto>, document.querySelector("#app"))


