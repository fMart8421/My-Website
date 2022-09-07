import React from 'react'

const MenuTitle = (props) => {
    return (
        <div className="w-full h-[75px] border-b-4 border-white flex justify-between items-center py-4 px-10">
            <img alt="" src={props.menuIcon} className="h-[50px]"></img>
            <p className="text-2xl">{props.title}</p>
            <img alt="Close Icon" src={"/svg/close-icon.svg"} className="h-[50px]"></img>
        </div>
    )
}

export default MenuTitle