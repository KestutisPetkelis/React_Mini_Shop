import React from 'react'
import { useNavigate } from 'react-router-dom';

const AllPosts = ({allposts}) => {
    const divStyle = {
        width: "90%", 
        minHeight: "600px",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        marginLeft: "10px",
        paddingRight: "21px",
        backgroundColor: "lightgreen"
       
      };

      const navigate = useNavigate() // apsirasom kintamaji navigacijai po puslapius
      
      const updatePostPage = (arg) =>{
        navigate(`/updatepost/${arg}`)     // kitam puslapyje -> "/updatepost/posto Id"
      }



      console.log(allposts)
    return (
        <div style={divStyle}>
            <div >
                <h1>All Posts</h1>
            </div>
            <div  className='d-flex f-wrap'>
            {allposts.map((x,index)=>
            <div style={x.style} className='singlePost' key={index}>
                <h4 >{x.title}</h4>
                <h4>{x.description}</h4>
                <img src={x.image} alt=""/>
                <button onClick={()=>updatePostPage(x.id)}>Update post</button>
            </div>    
            )}
            </div>
        </div>
    )
}

export default AllPosts
