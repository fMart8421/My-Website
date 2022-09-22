import React from 'react'

const Contact = (props) => {
    const className="relative flex items-center lg:ml-8 text-xl bounce-in origin-top max-w-max " + props.className
    return (

        <div
        style={props.style} 
        className={className}
        >
            <img src={props.image} alt={props.alt} className="h-[50px] sm:h-[75px] md:h-[100px]"/>
            {props.children}
            <div onClick={props.onClick}
                className="absolute w-full h-full bg-dark-primary/95 flex justify-center items-center transition-opacity opacity-0 hover:opacity-100 duration-500 cursor-pointer"
            >
                <p>{props.hoverContent}</p>
            </div>
        </div>
    )
}

export default Contact