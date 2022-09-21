import React from 'react'

const MenuTitle = (props) => {
    return (
        <div className="w-full lg:h-[75px] border-b-4 border-white flex justify-between items-center py-1 lg:py-4 px-2 lg:px-10">
            <img alt="" src={props.menuIcon} className=" h-[25px] lg:h-[50px]"></img>
            <p className="text-lg md:text-xl lg:text-2xl px-8">{props.title}</p>
            <img alt="Close Icon" src={"/svg/close-icon.svg"} className=" h-[25px] lg:h-[50px]"></img>
        </div>
    )
}

export default MenuTitle