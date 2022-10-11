import React, {  } from 'react'
import { useNavigate } from 'react-router-dom'

import Name from '../../components/Name'
import {sleep} from '../../utilities/functions/utilityFunctions'

const Welcome = () => {

    const navigate = useNavigate();

    const triggerChangePageAnimation = async () => {
        document.getElementById("welcomePage_greySide").classList.add("slider", "md-slider");
        await sleep(800);
        document.getElementById("welcomePage").classList.add("slider", "md-slider");
        await sleep(800);
        navigate("/home");
    }


    return (
        <div 
        id="welcomePage"
        className="grid grid-cols-5 flex-grow flex-shrink basis-0 transition items-center"
        >
            <div 
            id="welcomePage_blackSide"
            className=" col-span-5 lg:col-span-2 flex flex-col justify-center items-center bg-black h-full lg:px-[15%] py-4 lg:py-0"
            >
                <p className="lg:text-[4rem] md:text-5xl text-2xl">Hello there!</p>
                <p className="lg:text-[4rem] md:text-5xl text-2xl mt-2 lg:mt-4">I am</p>
                <Name isDisabled={true} className="lg:text-[5rem] md:text-5xl text-3xl pt-6 lg:pt-14 lg:ml-16 bg-black grid grid-cols-2 lg:grid-cols-1 transition" />
            </div>
            <div 
            id="welcomePage_greySide"
            className="lg:col-span-3 py-4 lg:py-0 col-span-5 px-[15%] flex flex-col"
            >
                <p className="lg:text-[3rem] md:text-4xl text-xl text-center">Are you here to learn more about me? Well then...</p>
                <div
                    className="self-center flex flex-col items-center mt-16 max-w-max cursor-pointer"
                    onClick={triggerChangePageAnimation}
                >
                    <img 
                    id="expandingImage"
                    className="h-[150px] md:h-[200px] lg:h-[250px] rounded-full" 
                    src="/images/Fabio_750.jpg"
                    alt="Young Male"></img>
                    <div className="lg:text-4xl md:text-3xl text-2xl mt-4 flex">
                        <p className="text-bounce mr-1" style={{ animationDelay: ".s" }}>C</p>
                        <p className="text-bounce mr-1" style={{ animationDelay: ".1s" }}>l</p>
                        <p className="text-bounce mr-1" style={{ animationDelay: ".2s" }}>i</p>
                        <p className="text-bounce mr-1" style={{ animationDelay: ".3s" }}>c</p>
                        <p className="text-bounce mr-4" style={{ animationDelay: ".4s" }}>k</p>
                        <p className="text-bounce mr-1" style={{ animationDelay: ".5s" }}>m</p>
                        <p className="text-bounce mr-1" style={{ animationDelay: ".6s" }}>e</p>
                        <p className="text-bounce" style={{ animationDelay: ".7s" }}>!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Welcome