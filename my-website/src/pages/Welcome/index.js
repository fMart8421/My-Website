import React from 'react'
import { Link } from 'react-router-dom'
import Name from '../../components/Name'

import './index.css'

const Welcome = () => {
    return (
        <div className="grid grid-cols-5 flex-grow ">
            <div className=" col-span-2 flex flex-col bg-black pt-36 pl-[15%] pr-[15%]">
                <p className="text-[4rem]">Hello there!</p>
                <p className="text-[4rem] mt-4">I am</p>
                <Name multiline={true} className=" text-[5rem] pt-10 ml-16" />


            </div>
            <div className="col-span-3 pt-32 pl-[15%] pr-[15%] flex flex-col">
                <p className="text-[3rem]">Are you here to learn more about me? Well then...</p>
                <Link to="/home" className="self-center max-w-max">
                    <div className="self-center flex flex-col items-center mt-16">
                        <img className="h-[250px] w-[250px] rounded-full" src="https://cdn.discordapp.com/attachments/835904110137442335/1009899105260154980/Fabio_2.jpg" alt="Young Male"></img>
                        <div className="text-4xl mt-4 flex">
                            <p className="text-bounce mr-1" style={{animationDelay:".s"}}>C</p>
                            <p className="text-bounce mr-1" style={{animationDelay:".1s"}}>l</p>
                            <p className="text-bounce mr-1" style={{animationDelay:".2s"}}>i</p>
                            <p className="text-bounce mr-1" style={{animationDelay:".3s"}}>c</p>
                            <p className="text-bounce mr-4" style={{animationDelay:".4s"}}>k</p>
                            <p className="text-bounce mr-1" style={{animationDelay:".5s"}}>m</p>
                            <p className="text-bounce mr-1" style={{animationDelay:".6s"}}>e</p>
                            <p className="text-bounce" style={{animationDelay:".7s"}}>!</p>
                            
                            </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Welcome