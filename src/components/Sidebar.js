import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {

    const divStyle = {
        width: "200px", 
        height: "600px",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        marginLeft: "10px",
        paddingRight: "21px",
        backgroundColor: "aliceblue"
       
      };


    return (
        <div style={divStyle}> 
            <h2>User Actions</h2>
            <h4><Link to="/createpost"> Create Post</Link>  </h4>
            <h4><Link to="/allposts"> All Posts </Link>  </h4>
            {/* <h4><Link to="/updatepost/:id"> Update Post </Link>  </h4> */}
        </div>
    )
}

export default Sidebar
