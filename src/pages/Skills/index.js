import React from 'react'

import { skillArray } from "./skills.js";

import Skill from '../../components/Skill/index.js';
import Menu from '../../components/Menu/index.js';

const Skills = () => {

    skillArray.sort((skill1, skill2)=> skill2.level-skill1.level)
    return (
        <div className=" flex-grow flex-shrink basis-0 px-[10%] my-8 flex justify-center items-center fade-in ">
            <Menu className="relative flex flex-col h-[400px] md:h-[500px] 2xl:h-[600px]"
                title="Skill List" 
                menuIcon="/svg/skills/skill-icon.svg"
            >
                <div className="overflow-y-scroll ">
                    {
                        skillArray.map((_skill, _index) =>{
                            return(
                                <Skill key={_skill.id} skill={_skill.name} level={_skill.level} icon={_skill.icon}></Skill>
                            )
                        })
                    }
                </div>
                <div className="w-full lg:h-[35px] bg-white text-dark-primary flex flex-wrap justify-between items-center px-4 -mb-0.5">
                    <p className="text-sm lg:text-lg"><span className="text-base lg:text-xl underline">Character Level:</span> 21</p>
                    <p className="text-sm lg:text-lg"><span className="text-base lg:text-xl underline">Unused skill points:</span> infinite</p>
                </div>
            </Menu>
        </div>
    )
}

export default Skills