import React from 'react'
import Header from "./Header"
import Footer from "./Footer"

const index = ({children: content}) => {

    return (
        <>
            <Header/>
                <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center',height:'80vh'}}>
                    {content}
                </div>
            <Footer/>
        </>
    );
}

export default index