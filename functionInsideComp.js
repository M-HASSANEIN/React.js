//////we can use this syntax
class Welcome extends React.Component {
    render() {
        return <div>
            <h1>welcome {this.props.name}</h1>
            <p>{this.props.children}</p>
        </div>


    }
}



function Home() {
    return <div>

        <Welcome name="tiko"></Welcome> {/* ///this first prop */}
        <Welcome name="nono"></Welcome> {/* ///this the children */}
    </div>
}
// we used the name of the function to return it in th view
ReactDOM.render(<Home></Home>, document.querySelector("#app"))
