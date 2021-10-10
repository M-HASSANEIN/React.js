function Toto(props) {
    console.log(props)
    return <div>
        <h1>welcome {props.name}</h1>
        <p>{props.children}</p>
    </div>

}
ReactDOM.render(<Toto name="function" >this test to load first function in react </Toto>, document.querySelector("#app"))
