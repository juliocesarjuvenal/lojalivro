function Cart(props) {
    return <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Quantity</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                (props.cart).map(item => <tr>
                    <td>{ item.title }</td>
                    <td>{ item.quantity }</td>
                    <td>{ item.preco }</td>
                    <td>
                        <button
                            onClick={() => props.addToCart(item)}
                        >+</button>

                        <button
                            onClick={() => props.removeFromCart(item)}
                        >-</button>
                    </td>
                </tr>)
            }
        </tbody>
    </table>
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        }, 
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
    }
}
