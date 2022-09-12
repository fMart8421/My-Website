import React from 'react'
import MenuTitle from '../MenuTitle'

const Menu = (props) => {

    const className= "h-[500px] border-4 rounded-md border-white " + props.className

    return (
        <div className={className}
            style={props.style}
        >
            <MenuTitle title={props.title} menuIcon={props.menuIcon} />
            {props.children}
        </div>
    )
}

export default Menu