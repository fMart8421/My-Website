import React from 'react'

const PauseMenuTitle = (props) => {
    return (
        <>
            <div className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full lg:w-10 lg:h-5 w-5 h-2.5 -translate-x-1/2 z-10"></div>
            <p className="border-4 rounded-full border-white py-3 text-center md:text-2xl lg:text-4xl bg-dark-primary z-20">{props.title}</p>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full lg:w-10 lg:h-5 w-5 h-2.5 translate-x-1/2 z-10"></div>
        </>
    )
}

export default PauseMenuTitle