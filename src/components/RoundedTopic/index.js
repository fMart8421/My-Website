import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { sleep } from '../../utilities/functions/utilityFunctions'

const RoundedTopic = (props) => {
    const [style, setStyle] = useState({
        left: "50%",
        top: "50%",
        animationDelay: "1s"
    })
    const className = "text-xl font-medium bg-white aspect-square text-dark-primary flex items-center justify-center h-1/3 hover:scale-110 transition-all ease-out duration-500 " + props.className
    const navigate = useNavigate();
    const roundedTopicRef = useRef(null);

    useEffect(() => {
        const changePosition = async () => {
            await sleep(1000);
            setStyle({
                left: props.position[0] + "px",
                top: props.position[1] + "px",
                animationDelay: "1s"
            })
        }
        changePosition();

    }, [props.position])

    return (
        <div
            id={props.id}
            ref={roundedTopicRef}
            className={className}
            style={style}
            onClick={() => { navigate(props.path) }}>
            <p
                className="fade-in"
            >

                {props.title}
            </p>
        </div>
    )
}

export default RoundedTopic