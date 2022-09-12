import React from 'react'
import { closeMenu } from '../../utilities/functions/utilityFunctions';

const PauseMenuItems = (props) => {

    

    return (
        <div 
        id="menu"
        className="open-scroll origin-top w-2/3 flex flex-col text-center text-3xl self-center bg-dark-primary border-b-2 border-r-2 border-l-2 rounded-b-md transition overflow-hidden">
            <p
                onClick={()=>{closeMenu("menu","close-scroll",1000,props.dismiss)}}
                className="py-4 border-b-2 border-dark-primary hover:text-dark-primary hover:bg-white"
            >
                Resume
            </p>
            <p
                onClick={()=>{closeMenu("menu","close-scroll",1000,props.changePage)}}
                className="py-4 border-y-2 border-dark-primary hover:text-dark-primary hover:bg-white"
            >
                Change Page
            </p>
            <p
                onClick={() => {closeMenu("menu","close-scroll",1000,props.navigate, "/home")}}
                className="py-4 border-y-2 border-dark-primary hover:text-dark-primary hover:bg-white"
            >
                Main Menu
            </p>
            <p
                onClick={()=>{closeMenu("menu","close-scroll",1000,props.navigate, "/about")}}
                className="py-4 border-t-2 border-dark-primary hover:text-dark-primary hover:bg-white"
            >
                About Me
            </p>
        </div>
    )
}

export default PauseMenuItems