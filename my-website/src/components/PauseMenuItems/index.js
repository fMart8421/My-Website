import React from 'react'

const PauseMenuItems = (props) => {
    return (
        <div className="w-2/3 flex flex-col text-center text-3xl self-center bg-dark-primary border-b-2 border-r-2 border-l-2 rounded-b-md">
            <p
                onClick={props.dismiss}
                className="py-4 border-b-2 border-dark-primary hover:border-white hover:bg-black"
            >
                Resume
            </p>
            <p
                onClick={props.changePage}
                className="py-4 border-y-2 border-dark-primary hover:border-white hover:bg-black"
            >
                Change Page
            </p>
            <p
                onClick={() => props.navigate("/about")}
                className="py-4 border-t-2 border-dark-primary hover:border-white hover:bg-black"
            >
                About Me
            </p>
        </div>
    )
}

export default PauseMenuItems