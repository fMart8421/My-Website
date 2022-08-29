import React from 'react'

const RoundedTopic = (props) => {
    const className= "bg-white aspect-square text-dark-primary flex items-center justify-center h-1/6 " + props.className
    return (
        <div className={className} style={props.style} onClick={props.onClick}>
            <p className="text-xl font-medium">{props.title}</p>
        </div>
    )
}

export default RoundedTopic