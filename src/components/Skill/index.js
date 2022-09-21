import React from 'react'

const Skill = (props) => {

    const getLevels = (_level) => {
        const levels = [];

        for (let index = 0; index < 6; index++) {
            const bgColor = index <= _level ? "#fff" : "#111";
            const textColor = index <=_level ? "#fff" : "#aaa"
            levels.push(
                <div key={`Lv${index}`} className="flex flex-col py-2 mx-0.5">
                    <div className="w-5 h-[75px] flex flex-col-reverse mb-2">
                        <div
                            className="w-5"
                            style={{ backgroundColor: `${bgColor}`, height: `${75 * index / 5}px` }}
                        >
                        </div>
                    </div>
                    <p 
                    style={{color: `${textColor}`}}
                    className="text-xs">Lv{index}</p>
                </div>
            )
        }
        return levels
    }

    return (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-b-4 items-center last:border-b-0">
                <div className="md:border-r-4 col-span-3 md:col-span-1 flex flex-col items-center py-4 px-6">
                    <img alt="" src={props.icon} className="h-[75px]"></img>
                    <p className="font-medium text-lg">{props.skill}</p>
                </div>
                <div className=" col-span-3 lg:col-span-4 flex items-center justify-between px-6">
                    <p className="lg:text-xl">Skill Level</p>
                    {getLevels(props.level)}
                </div>
            </div>
    )
}

export default Skill