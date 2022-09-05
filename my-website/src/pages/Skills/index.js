import React from 'react'

import { skillLevels } from "./skills.js";
import store from "../../redux/store/store";

import Skill from '../../components/Skill/index.js';

const Skills = () => {

    const skillsWidth = store.getState().headerWidth;

    return (
        <div className="container my-8 flex justify-center">
            <div className="relative flex flex-col h-[500px] border-4 rounded-md border-white"
                style={{ width: `${skillsWidth}px` }}
            >
                <div className="w-full h-[75px] border-b-4 border-white flex justify-between items-center py-4 px-10">
                    <img alt="Skill Icon" src={"/svg/skills/skill-icon.svg"} className="h-[50px]"></img>
                    <p className="text-2xl">Skill List</p>
                    <img alt="Close Icon" src={"/svg/skills/close-icon.svg"} className="h-[50px]"></img>
                </div>
                <div className="overflow-y-scroll ">
                    {
                        skillLevels.map((_skill, key) =>{
                            return(
                                <Skill skill={_skill.name} level={_skill.level} icon={_skill.icon}></Skill>
                            )
                        })
                    }
                </div>
                <div className="w-full h-[35px] bg-white text-dark-primary flex justify-between items-center px-4">
                    <p className="text-lg"><span className="text-xl underline">Character Level:</span> 21</p>
                    <p className="text-lg"><span className="text-xl underline">Unused skill points:</span> infinite</p>
                </div>
            </div>
        </div>
    )
}

export default Skills