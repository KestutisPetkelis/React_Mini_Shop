//import { useState } from 'react';
const Cart = ({boughtItems, sum, cart, add}) =>{
    const divStyle = {
        width: "100%",
        // height: "100%",
        border: "1px solid blue",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "lightgreen",
        padding: "10px",
        paddingTop: "40px"
       
    };
    function countTotal() {
        let sum = 0
        cart.map(x => sum += x.price * x.quantity)
        return sum.toFixed(2)
    }
    return(
        <div style={divStyle} >
            <h2>Total Sum: {countTotal()}</h2>

            {cart.map((x,index) =>
                <div className="card2 d-flex" key={index}>
                 <img src={x.image} alt=""/>
                <div>    
                    <h3>{x.title}</h3>
                    <h3>Price: {x.price}</h3> 
                    <h3> Quantity: {x.quantity}</h3>
                </div>
                <div>
                    <button onClick={()=> add(true, index)}>Add</button>
                    <button onClick={()=> add(false, index)}>Remove</button>
                </div>

            </div>
            )}
            <h3>Total: {sum}</h3>
        </div>
    )
}

export default Cart;