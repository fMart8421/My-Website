import React from 'react'
import { closeMenu } from '../../utilities/functions/utilityFunctions'

const ChangePageItems = (props) => {
    return (
        <div id="changePageMenu" className="w-2/3 flex flex-col text-center md:text-lg lg:text-3xl self-center bg-dark-primary border-2 border-t-0 rounded-b-md origin-top open-scroll overflow-y-scroll">
            {props.pageList.map((page, index) => {
                return (
                    <p key={index} onClick={() => { closeMenu("changePageMenu", "close-scroll",1000, props.navigate, page.path)}} className="py-4 hover:bg-white hover:text-dark-primary">
                        {page.title}
                    </p>
                )
            })}
            <div className="py-4 relative group hover:bg-white" onClick={() => { closeMenu("changePageMenu", "close-scroll",1000, props.goBack)}}>
                <div 
                className="absolute top-1/2 -translate-y-1/2 border-[5px] left-2 lg:left-0 lg:border-[10px] w-0 h-0 border-y-transparent border-l-transparent group-hover:border-r-dark-primary"></div>
                <p className="justify-self-cente group-hover:text-dark-primary">Back</p>
            </div>
        </div>
    )
}

export default ChangePageItems