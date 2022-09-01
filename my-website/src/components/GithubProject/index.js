import React, { useState, useEffect } from 'react'

const GithubProject = (props) => {

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        if (props.languages) {
            let _languages = [];
            for (const language of props.languages) {
                _languages.push(language);
            }
            setLanguages(_languages);
        }
    }, [props.languages])

    return (
        <div className="bg-white text-dark-primary container flex flex-col flex-wrap rounded"
        
        >
            <div className="bg-dark-primary mt-4 flex justify-center mx-[10%] mb-2 rounded">
                <p className="py-2 text-xl text-white ">{props.title}</p>
            </div>
            <p className="text-justify text-lg mt-2">{props.description}</p>
            <div className="mt-10 flex justify-between flex-wrap mb-2">
                {languages.map((language, key)=>{
                    return(
                        <p key={key}>{language}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default GithubProject