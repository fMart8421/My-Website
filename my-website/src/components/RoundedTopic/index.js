import React from 'react'

const RoundedTopic = (props) => {
    const className = "bg-white aspect-square text-dark-primary flex items-center justify-center h-1/3 hover:scale-110 transition-all ease-linear " + props.className
    return (
        <div
            id={props.id}
            className={className}
            style={props.style}
            onClick={props.onClick}>
            <p className="text-xl font-medium">{props.title}</p>
        </div>
    )
}

export default RoundedTopic