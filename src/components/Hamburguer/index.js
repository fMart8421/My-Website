import React from 'react'

const Hamburguer = (props) => {

  const className="cursor pointer "+props.className

  return (
    <div 
    className={className}
    onClick={props.onClick}
    >
        <div
        className=" w-6 md:w-8 h-0.5 md:h-1 bg-white rounded-full transition-all duration-500 my-1"></div>
        
        <div
        className=" w-6 md:w-8 h-0.5 md:h-1 bg-white rounded-full transition-all duration-500 my-1"></div>
        
        <div
        className=" w-6 md:w-8 h-0.5 md:h-1 bg-white rounded-full transition-all duration-500 my-1"></div>


    </div>
  )
}

export default Hamburguer