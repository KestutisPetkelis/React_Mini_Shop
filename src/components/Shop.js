const Shop = ({products, buyItem}) =>{
    const divStyle = {
        width: "100%",
        height: "100%",
        border: "1px solid blue",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "lightgreen",
        padding: "10px",
        paddingTop: "40px"
       
    };
    
    
    return(
        <div style={divStyle} className="d-flex f-wrap ali-start" >
            {products.map((x, index) => 
                <div className="card" key={index}>
                    <img src={x.image} alt=""/>
                    <h3>{x.title}</h3>
                    <h3>{x.price}</h3> 
                    <button onClick={()=>buyItem(index)}> Buy</button>
                </div>

            )}
           
        </div>
    )
}

export default Shop;