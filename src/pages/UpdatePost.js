import React from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const UpdatePost = ({allposts, inputs, saveUpdatedPost}) => {
    const divStyle = {
        width: "90%", 
        height: "600px",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        marginLeft: "10px",
        paddingRight: "21px",
        backgroundColor: "lightgreen"
       
    };

    const {id} = useParams() //turi sutapti su is 
      // <Route path="/:id" element={<UpdatePost/>} >

    const navigate = useNavigate()
    const gotoAllPosts=()=>{
        navigate('/allposts')
    }

    console.log ("Update puslapis", id, typeof(id), allposts)
    const singlePost = allposts.find(x => x.id===Number(id))
    console.log(singlePost)

    return (
        <div style={divStyle}>
            <h1>Update Post Page</h1><br></br>
            {/* {singlePost.title}<br></br>
            {singlePost.description}<br></br>
            {singlePost.id}<br></br>
            {singlePost.style.color}<br></br> */}
            <div className='inputField'>
            <label>Post Title: </label>
            <input type="text" ref={inputs.title} defaultValue={singlePost.title}></input><br></br>
            <label className='pr-20'>Image: </label>
            <input type="text" ref={inputs.image} size="121" defaultValue={singlePost.image}></input><br></br>
            <label>Desciption: </label><br></br>
            <textarea cols="100" rows="10" ref={inputs.description} defaultValue={singlePost.description}></textarea><br></br><br></br>
            {/* <input type="text" ref={inputs.description} defaultValue={singlePost.description}></input><br></br><br></br> */}
            <h3><label>Style elements:</label></h3><br></br> 
            <label className='pr-19'> Post width: </label>
            <input type="number" ref={inputs.style.width} defaultValue={singlePost.style.width.slice(0,-2)}></input><br></br>
            <label className='pr-13'> Post height: </label>
            <input type="number" ref={inputs.style.height} defaultValue={singlePost.style.height.slice(0,-2)}></input><br></br>
            <label className='pr-25'> Text color: </label>
            <input type="text" ref={inputs.style.color} size="40" defaultValue={singlePost.style.color}></input><br></br>
            <label className='pr-1'> Border radius </label>
            <input type="number" ref={inputs.style.borderRadius} defaultValue={singlePost.style.borderRadius.slice(0,-2)}></input><br></br>

            </div>
            <button onClick={()=>{saveUpdatedPost(id); gotoAllPosts()}}>Save post</button>

            <div>




            </div>
        </div>
    )
}

export default UpdatePost
