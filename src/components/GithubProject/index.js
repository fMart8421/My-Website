import React, {} from 'react';

const GithubProject = (props) => {

    const className = "bg-white text-dark-primary container flex flex-col justify-between flex-wrap rounded fade-in hover:scale-105 transition-transform " + props.className

    return (
        <div className={className}
            style={props.style}
            key={props.key}
            onClick={props.redirectTo}
        >
            <div className="bg-dark-primary mt-4 text-center md:mx-[10%] mb-2 rounded">
                <p className="py-2 px-2 text-lg lg:text-xl text-white ">{props.title}</p>
            </div>
            <p className="text-justify lg:text-lg mt-2">{props.description}</p>
            <div className="mt-10 flex justify-between flex-wrap mb-2">
                {props.languages.map((language, key) => {
                    return (
                        <p className="mx-1 text-sm sm:text-base" key={key}>{language}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default GithubProject