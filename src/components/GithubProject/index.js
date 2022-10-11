import { useState } from 'react';

const GithubProject = (props) => {

    const [isHovering, setIsHovering] = useState(false);

    const className = "bg-white text-dark-primary container flex flex-col justify-between flex-wrap rounded fade-in hover:scale-105 transition-transform " + props.className

    const mouseEnterHandler = () =>{
        setIsHovering(true);
    }

    const mouseLeaveHandler = () =>{
        setIsHovering(false);
    }

    return (
        <div className={className}
            style={props.style}
            key={props.key}
            onClick={props.redirectTo}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <div className={`bg-${isHovering?"black":"dark-primary"} mt-4 text-center md:mx-[10%] mb-2 rounded`}>
                <p className={"py-2 px-2 text-lg lg:text-xl text-white "}>{props.title}</p>
            </div>
            <p className="text-justify lg:text-lg mt-2">{props.description}</p>
            <div className="mt-10 flex justify-between flex-wrap mb-2">
                {props.languages.map((language, key) => {
                    return (
                        <p className={`mx-1 text-sm sm:text-base ${isHovering && " border-white bg-black text-white"} px-1.5 py-1 border border-white rounded transition-colors`} key={key}>{language}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default GithubProject