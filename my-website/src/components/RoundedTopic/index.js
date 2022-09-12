import React from 'react'
import { useNavigate } from 'react-router-dom'

const RoundedTopic = (props) => {
    const className = "text-xl font-medium bg-white aspect-square text-dark-primary flex items-center justify-center h-1/3 hover:scale-110 transition-all ease-linear " + props.className
    const path = `/${props.title.toLowerCase()}`;
    const navigate = useNavigate();
    return (
            <p
                id={props.id}
                className={className}
                style={props.style}
                onClick={()=>{navigate(path)}}>
                    {props.title}
            </p>
    )
}

export default RoundedTopic