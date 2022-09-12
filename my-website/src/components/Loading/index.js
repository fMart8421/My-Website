import React from 'react'

const Loading = () => {
    return (
        <div className="flex-1 flex justify-center items-center text-3xl ">
            <p className="pr-2">Loading</p>
            <p 
            className="text-bounce px-1"
            style={{animationDelay:`150ms`, animationDuration:`1.5s`}}
            >.</p>
            <p 
            className="text-bounce px-1"
            style={{animationDelay:`300ms`, animationDuration:`1.5s`}}
            >.</p>
            <p 
            className="text-bounce px-1"
            style={{animationDelay:`450ms`, animationDuration:`1.5s`}}
            >.</p>
        </div>
    )
}

export default Loading