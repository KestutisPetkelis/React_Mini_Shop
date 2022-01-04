import React from 'react'

const CreatePost = ({createPost, inputs}) => {
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

    
    return (
        <div style={divStyle}>
            <h1>Create Post Page</h1><br></br>
            <div className='inputField'>
            <label>Post Title: </label>
            <input type="text" ref={inputs.title}></input><br></br>
            <label className='pr-20'>Image: </label>
            <input type="text" ref={inputs.image} size="121"></input><br></br>
            <label>Desciption: </label><br></br>
            <textarea cols="100" rows="10" ref={inputs.description} placeholder='Write your comments here, please'></textarea><br></br><br></br>
            {/* <input type="text" ref={inputs.description}></input><br></br><br></br> */}
            <h3><label>Style elements:</label></h3><br></br>
            <label className='pr-19'> Post width: </label>
            <input type="number" ref={inputs.style.width}></input><span>px</span><br></br>
            <label className='pr-13'> Post height: </label>
            <input type="number" ref={inputs.style.height}></input><span>px</span><br></br>
            <label className='pr-25'> Text color: </label>
            <input type="text" ref={inputs.style.color} size="40"></input><br></br>
            <label className='pr-1'> Border radius </label>
            <input type="number" ref={inputs.style.borderRadius}></input><span>px</span><br></br>
            
            </div>
            <button onClick={()=>createPost()}>Create post</button>
        </div>
    )
}

export default CreatePost
