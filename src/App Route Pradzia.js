import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import Header from './components/Header';
import Sidebar from './components/SIdebar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';


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
  const christmasTree = [
    "https://th.bing.com/th/id/R.590da0f25941faf877867aa9d9208190?rik=ovJsdfnjduczvA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fchristmas_tree%2fchristmas_tree_PNG18.png&ehk=GrcIC%2fbzsNcxwB1M6PvdCaYbr8ti07zv%2fZP2oiwBtZ4%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.cdf4cf0d57f3615a91028680a6b4fad7?rik=A8Yc6ieZ56Jacw&riu=http%3a%2f%2fchristmastreeky.com%2fwp-content%2fuploads%2f2020%2f12%2ftrees-canaan-fir-kentucky-christmas.png&ehk=%2flVYdmYNC9cxFM59Pm6mNNoz9MnFqZJM6jy5I8xLB1o%3d&risl=&pid=ImgRaw&r=0",
    "https://www.vippng.com/png/full/7-75961_evergreen-tree-png.png",
    "https://meye.dk/wp-content/uploads/2020/12/meye_x7437_abies-nordmanniana-707x1024.png"
  ]

  return (
    <div style={divStyle} className="App" >
      <BrowserRouter>
        <Header/>
        <div className='d-flex'>
        <Sidebar/>
        
      <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallery" element={<Gallery tree={christmasTree}/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>


      </Routes>
      </div>
      <Footer/>
      
      
      
      </BrowserRouter>
      
    </div>
    
    
  );
}

export default App;
