import React, {useState} from 'react'

const Hamburguer = () => {

    const [hamburguerToggled, setHamburguerToggled] = useState(false);

    const toggleHamburguer = ()=>{
        setHamburguerToggled(!hamburguerToggled);
    }

  return (
    <div 
    className="absolute top-1/2 -translate-y-1/2 left-16 cursor-pointer" 
    onClick={toggleHamburguer}
    >
        <div
        style={hamburguerToggled ? {}:{marginTop:"6px", marginBottom:"6px"}} 
        className=" w-8 h-1 bg-white rounded-full transition-all duration-500"></div>
        
        <div
        style={hamburguerToggled ? {}:{marginTop:"6px", marginBottom:"6px"}} 
        className=" w-8 h-1 bg-white rounded-full transition-all duration-500"></div>
        
        <div
        style={hamburguerToggled ? {}:{marginTop:"6px", marginBottom:"6px"}} 
        className=" w-8 h-1 bg-white rounded-full transition-all duration-500"></div>


    </div>
  )
}

export default Hamburguer