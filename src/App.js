import './App.css';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

import Main from './components/Main';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {

  const divStyle = {
    width: "100%",
    height: "100vh",
    border: "1px solid blue",
    marginTop: "0px",
    marginBottom: "10px",
    paddingRight: "21px",
    backgroundColor: "aliceblue"
   
  };

  const products = [
    {
        image: "https://www.smow.com/pics/vt-078-000/a/vitra-panton-chair-dark-lime_zoom.jpg",
        title: "green chair",
        price: 35.38
    },
    {
        image: "https://www.barkerandstonehouse.co.uk/media/catalog/product/cache/b72f787c68b0e64bc0f8dc731e354979/b/e/bebochaiblac_1_zoom.jpg",
        title: "simple chair",
        price: 19.99
    },
    {
        image: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
        title: "fotelis chair",
        price: 55
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/41Jgo7WjH1L.jpg",
        title: "Boss chair",
        price: 128
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/220px-Set_of_fourteen_side_chairs_MET_DP110780.jpg",
        title: "king chair",
        price: 88.25
    },
  ]
  
 
  const [getArray, setArray] = useState([]) // itemu, esanciu krepselyje ("cart") masyvas
  const [getSum, setSum] = useState(1000)   // turimi pinigai
  const [getWindow,setWindow] = useState(1) // rodomu langu keitiklis
  
  const change = (num)  =>{
    setWindow(num)
  }
  function buyItem(index){
    
    const newSum = getSum-products[index].price
      if(newSum >= 0){
      setArray([...getArray, products[index]])
      setSum(newSum)
    } else{
      alert("You have not enought money")
    }

  }

  
  return (
    <div className="App" style={divStyle}>
      <div className="header d-flex">
        <div className='flex1'><button onClick={()=>change(1)}>Main</button></div>
        <div className='flex1'><button onClick={()=>change(2)}>Shop</button></div>
          <div className='flex1 d-flex ali-center just-center'><button onClick={()=>change(3)}>Cart</button> 
          
          <FaShoppingCart/> <h3 className='pl-10'> {getArray.length}</h3>
          
        </div>
      </div>
      {getWindow===1 && <Main />}
      {getWindow===2 && <Shop products={products} buyItem={buyItem}/>}  
      {getWindow===3 && <Cart boughtItems={getArray} sum={getSum}/>}
            
    </div>
    
    
  );
}

export default App;
