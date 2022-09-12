import React from 'react'

import { skillLevels } from "./skills.js";
import store from "../../redux/store/store";

import Skill from '../../components/Skill/index.js';
import Menu from '../../components/Menu/index.js';

const Skills = () => {

    const skillsWidth = store.getState().headerWidth;

    return (
        <div className="container my-8 flex justify-center fade-in ">
            <Menu className="relative flex flex-col "
                style={{ width: `${skillsWidth}px` }}
                title="Skill List" 
                menuIcon="/svg/skills/skill-icon.svg"
            >
                <div className="overflow-y-scroll ">
                    {
                        skillLevels.map((_skill, _index) =>{
                            return(
                                <Skill key={_skill.id} skill={_skill.name} level={_skill.level} icon={_skill.icon}></Skill>
                            )
                        })
                    }
                </div>
                <div className="w-full h-[35px] bg-white text-dark-primary flex justify-between items-center px-4">
                    <p className="text-lg"><span className="text-xl underline">Character Level:</span> 21</p>
                    <p className="text-lg"><span className="text-xl underline">Unused skill points:</span> infinite</p>
                </div>
            </Menu>
        </div>
    )
}

export default Skills