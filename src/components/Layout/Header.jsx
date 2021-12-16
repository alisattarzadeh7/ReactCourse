import React from 'react'
import {Link, useHistory} from "react-router-dom";


const Header = () => {

    // const history = useHistory()

    return (
        <div style={{backgroundColor: 'red',width:'100%',height:50}}>
            <Link to="/home"><button >home</button>&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link to="/about"><button >about</button>&nbsp;&nbsp;&nbsp;&nbsp;</Link>


        </div>
    );
}

export default Header