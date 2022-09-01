import React from 'react'
import { Link } from 'react-router-dom'

const RoundedTopic = (props) => {
    const className = "bg-white aspect-square text-dark-primary flex items-center justify-center h-1/3 hover:scale-110 transition-all ease-linear " + props.className
    const path = `/${props.title.toLowerCase()}`;

    return (
        <Link to={path} className="text-xl font-medium">
            <p
                id={props.id}
                className={className}
                style={props.style}
                onClick={props.onClick}>
                    {props.title}
            </p>
        </Link>
    )
}

export default RoundedTopic