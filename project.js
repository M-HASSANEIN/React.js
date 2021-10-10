const PRODUCTS = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

function ProductTable({ products }) {
    return <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                </tr>
            </thead>
        </table>
    </div>

}
class Filte extends React.Component {
    render() {
        const { products } = this.props
        /* return <div>{JSON.stringify(products)}</div> */
        return <ProductTable></ProductTable>
    }
}
ReactDOM.render(<Filte products={PRODUCTS}></Filte>, document.querySelector("#app"))