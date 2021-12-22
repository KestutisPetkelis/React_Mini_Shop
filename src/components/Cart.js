const Cart = ({boughtItems, sum}) =>{
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
    console.log( boughtItems)
    
    return(
        <div style={divStyle} >
            {boughtItems.map((x,index) =>
                <div className="card2 d-flex" key={index}>
                 <img src={x.image} alt=""/>
                 <div>    
                    <h3>{x.title}</h3>
                    <h3>Price: {x.price}</h3> 
                    <h3> Quantity: </h3>
                {/* <button onClick={()=>buyItem(index)}> Buy</button> */}
                </div>
            </div>
            )}
            <h3>Total: {sum}</h3>
        </div>
    )
}

export default Cart;