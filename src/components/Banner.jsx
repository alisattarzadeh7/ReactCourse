import React, {useState} from 'react'


const Banner = ({text}) => {


    const [name,setName] = useState('hello');

    // data:{
    //     return {
    //         name:'ali'
    //     }
    // }
    //
    // method:{
    //     setMyname(){
    //         name = 'ali'
    //     }
    // }

    const setMyname = ()=>{
        setName('ali')
    }

    return (
        <div style={{backgroundColor: 'green'}}>
            <button onClick={setMyname}>change name </button>
            {/*{text}*/}
            {name}
        </div>
    );
}

export default Banner