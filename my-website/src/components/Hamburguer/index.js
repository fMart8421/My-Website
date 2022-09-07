import React from 'react'

const Hamburguer = (props) => {

  return (
    <div 
    className="absolute top-1/2 -translate-y-1/2 left-16 cursor-pointer" 
    onClick={props.onClick}
    >
        <div
        className=" w-8 h-1 bg-white rounded-full transition-all duration-500 my-1"></div>
        
        <div
        className=" w-8 h-1 bg-white rounded-full transition-all duration-500 my-1"></div>
        
        <div
        className=" w-8 h-1 bg-white rounded-full transition-all duration-500 my-1"></div>


    </div>
  )
}

export default Hamburguer