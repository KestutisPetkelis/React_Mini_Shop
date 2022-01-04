import React from 'react';
import './App.css';
import { useState, useRef} from 'react';
// import {useNavigate} from 'react-router-dom'

// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';

import AllPosts from './pages/AllPosts';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';



function App() {

  const divStyle = {
    width: "100%", 
    height: "100vh",
    // border: "1px solid blue",
    marginTop: "0px",
    marginBottom: "10px",
    marginLeft: "10px",
    paddingRight: "21px",
    backgroundColor: "aliceblue"
   
  };
  
  

  const [allPosts, setAllPosts] = useState([{
    title: "First Post",
    description: "This is the first post of all good posts",
    image: "https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg",
    id: 12345,
    style:{
      width:"300px",
      height:"450px",
      color: "grey",
      borderRadius: "10px" 
    }

  },
  { 
    title: "Second Post",
    description: "Shalom Israel, privet vsem evrejam!!!",
    image: "https://pbs.twimg.com/profile_images/1397477621395505156/S8bo0vYS_400x400.jpg",
    id: 62775,
    style:{
      width:"350px",
      height:"400px",
      color: "red",
      borderRadius: "10px" 
    }
  }


  ])          // kintamasis postams

  const inputs ={   // apsirasom "input"'us, nors pasiimam juos per "CreatePost" puslapi
    title:useRef(), // perduodam per {props} kintamaji "inputs" ir f-ja "createPost"
    description: useRef(),
    image:useRef(),
    id: 44444,
    style:{
      width: useRef(),
      height: useRef(),
      color: useRef(),
      borderRadius: useRef() 
    }
  }

  // Posto sukurimo dalis

  const createPost =()=>{       // sukuriam posta is inputo reiksmiu
    console.log ("click", allPosts)
    validate(inputs)
    const newPost={
        title: inputs.title.current.value,
        description: inputs.description.current.value,
        image: inputs.image.current.value,
        id: randomIndex(allPosts),  // idedam unikalu indeksa, sugeneruota randomu
        style:{
            width: inputs.style.width.current.value+"px",
            height: inputs.style.height.current.value+"px",
            color: inputs.style.color.current.value,
            borderRadius: inputs.style.borderRadius.current.value+"px" 
        }
    }
    console.log ("click again", newPost)
    setAllPosts([...allPosts, newPost]) // pridedam posta i masyva
    // isvalom ivedimo laukus
    inputs.title.current.value=""
    inputs.description.current.value=""
    inputs.image.current.value=""
    inputs.style.width.current.value=0
    inputs.style.height.current.value=0
    inputs.style.color.current.value=""
    inputs.style.borderRadius.current.value=0
  }


  function randomMaxMin(max, min){      // randomas
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const randomIndex=(allPosts)=>{   // f-ja unikalaus Id generavimui
    const uniqueId =randomMaxMin(99999,10000)
    const notUniqueId = allPosts.find(x=> x.id===uniqueId) // grazina reiksme arba undefined
    if (notUniqueId){         // cia atsiranda rekursija, kadangi "notUniqueId" egzistuoja , vadinasi yra true
      console.log("tas pats", notUniqueId ,uniqueId)
      console.log("pabandom is naujo")
      return (randomIndex(allPosts))    // cia grazinam uniqueId is rekursyvines f-jos
    }else{        //
      console.log ("viskas OK", notUniqueId ,uniqueId)
      return(uniqueId)    // cia grazinamas, jei iskart viskas gerai
    }
  }

  // Posto update'o dalis

  const saveUpdatedPost=(id)=>{
    validate(inputs)
    //  Sis kodas veikia, jei reikia prideti i GALA (masyvo gale)
    // const currentPost = allPosts.find(x => x.id===Number(id)) // randam update'inama posta
    // const otherPosts = allPosts.filter(x=> x.id !==currentPost.id) // ismetam is masyvo, jei reik prideti i GALA
    const updatedPost={                               // sugeneruojam atnaujinta posta
      title: inputs.title.current.value,
      description: inputs.description.current.value,
      image: inputs.image.current.value,
      id: Number(id),         // nekeiciam unikalaus indekso
      style:{
          width: inputs.style.width.current.value+"px",
          height: inputs.style.height.current.value+"px",
          color: inputs.style.color.current.value,
          borderRadius: inputs.style.borderRadius.current.value+"px" 
      }
    }

    const res = allPosts.map(x => (updatedPost.id===x.id)? updatedPost : x) // idedam i ta pacia vieta, kur buvo
    setAllPosts([...res])               // atnaujinam State tipo kintamaji-masyva
    // setAllPosts([...otherPosts, updatedPost]) // pridedam posta i masyva i GALA

    
  }

  // ***ivedimo lauku ("input") validacijos (atitikimo reikalavimams) f-ja
  const validate = (inputs)=>{
    console.log ("Kliukst", inputs, inputs.description.current.value.length)
    if (inputs.description.current.value.length<20 || inputs.description.current.value.length>200
      ||inputs.title.current.value.length<10 || inputs.title.current.value.length>100
      || !inputs.image.current.value.includes("http")
      || inputs.style.width.current.value<1 || inputs.style.width.current.value>999
      || inputs.style.height.current.value<1 || inputs.style.height.current.value>999
      || inputs.style.borderRadius.current.value<1 || inputs.style.borderRadius.current.value>99
      || inputs.style.color.current.value.length<1 || inputs.style.color.current.value.length>20

      )
      {
      alert ("Viskas negerai... <20 arba >200 ar panasiai. Vienzo - pradek is naujo")
      window.location.reload(false)
    }
  }

  



  return (
    <div style={divStyle} className="App " >
     
      <BrowserRouter>
        <div className="d-flex"> 
          <Sidebar/>
       

        <Routes>
          <Route path="/allposts" element={<AllPosts allposts={allPosts} />}></Route>
          <Route path="/createpost" element={<CreatePost allposts={allPosts} inputs={inputs} createPost={createPost}/>} ></Route>
          <Route path="/updatepost/:id" element={<UpdatePost allposts={allPosts} inputs={inputs} saveUpdatedPost={saveUpdatedPost}/>} ></Route>
        </Routes>
        </div>

      </BrowserRouter>
      
    </div>
    
    
  );
}

export default App;
