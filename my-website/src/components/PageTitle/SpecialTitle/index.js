import React from 'react'
import { Link } from 'react-router-dom';


const SpecialTitle = (props) => {
    const className= "hover:underline hover:underline-offset-2 transition ease-out duration-1000 " + props.className

  return (
    <a
            className={className}
            style={{ top: props.top, width: props.width }}
            href={props.link}
        >
            <p className="text-3xl font-semibold pt-2 pb-1">{props.title}</p>
            <p className="text-xl font-medium pt-1 pb-2">{props.subtitle}</p>
        </a>
  )
}

export default SpecialTitle