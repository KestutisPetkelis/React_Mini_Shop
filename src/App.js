//  ***** su klaidom bet esme masyvo rusiavime ******* !!!!!!!!!!


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
  
  const [getProducts, setProducts] = useState(products)
  const [getArray, setArray] = useState([]) // visu itemu, esanciu krepselyje ("cart") masyvas
  
  const [getIndex, setIndex] =useState([])
   
  const [getSum, setSum] = useState(1000)   // turimi pinigai
  const [getWindow,setWindow] = useState(1) // rodomu langu keitiklis
  const [getCart, setCart] = useState([])   // atfiltruotu itemu, esanciu krepselyje, masyvas

  const change = (num)  =>{
    setWindow(num)
  }
  function buyItem(index){
    
      const newSum = getSum-products[index].price
      if(newSum >= 0){

        // ***** standartinis visu elementu sudejimas i masyva
        setArray([...getArray, products[index]])
        setSum(newSum)
      
        setIndex([...getIndex,index]) 

        // **** atrenkam pasikartojamcius elementus su pasikartojimu skaiciumi
        const currentProduct = getProducts[index] // pasizymim isrinkta produkta
        const productExists = getCart.find(x => x.title === currentProduct.title) 
        // pagal unikalu zymeni(pabvadinim a"title") patikrinam ar yra elementas masyva "true/false"

        if(productExists) {           // jeigu yra "true"
            const otherProducts = getCart.filter(x => x.title !== currentProduct.title) 
                                      // ismetam produkta is masyvo, kad nesidubliuotu
            productExists.quantity++  //  kieki padidinam +1
            setCart([...otherProducts, productExists]) // pridedam elementa i masyva  
        } else {                      // jeigu nerra "false"
            currentProduct.quantity = 1   //  objektui pridedam "key" quantity ir nustatom reiksme "1"
            setCart([...getCart, currentProduct]) // pridedam nauja elementa i masyva
        }

            
      
    } else{
      alert("You have not enought money")
    }
  }

   // funkcija prideti/atimt elementa is krepselio
    
  function addOrRemove(add, index) {
    if(add) {
        const newArray = getCart
        getCart[index].quantity++
        setCart([...newArray])
    } else  {
        const newArray = getCart
        getCart[index].quantity--
        if(getCart[index].quantity === 0) {
            newArray.splice(index, 1)
        }
        setCart([...newArray])
    }
  }



  

  
  return (
    <div className="App" style={divStyle}>
      <div className="header d-flex">
        <div className='flex1'><button onClick={()=>change(1)}>Main</button></div>
        <div className='flex1'><button onClick={()=>change(2)}>Shop</button></div>
          <div className='flex1 d-flex ali-center just-center'><button onClick={()=>change(3)}>Cart</button> 
          
          <FaShoppingCart/> <h3 className='pl-10'> {getCart.length}</h3>
          
        </div>
      </div>
      {getWindow===1 && <Main />}
      {getWindow===2 && <Shop products={products} buyItem={buyItem}/>}  
      {getWindow===3 && <Cart boughtItems={getArray} sum={(1000-getSum).toFixed(2)} cart = {getCart} getIndex={getIndex} add={addOrRemove}/>}
            
    </div>
    
    
  );
}

export default App;
