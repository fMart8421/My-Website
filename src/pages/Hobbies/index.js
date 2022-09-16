import React, {useState} from 'react';
import HobbyItem from '../../components/HobbyItem';
import Menu from '../../components/Menu';

import { hobbies } from "./hobbies.js";

const Hobbies = () => {

    const [itemNumber, ] = useState(hobbies.length);
    const [openedItem, setOpenedItem] = useState(<></>)

    const loadItem = (_item) => {
        setOpenedItem(<HobbyItem close={()=>{setOpenedItem(<></>)}} hobby={hobbies[_item]}></HobbyItem>)
    }

    return (
        <div className="container grid grid-cols-6 py-8">
            <div className=" col-span-2 flex items-center">
            <img alt="Talking Fabito" src="/svg/hobbies/talking-fabito.svg" ></img>

            </div>
            <div></div>
            <Menu className="col-span-3 flex flex-col justify-between fade-in"
                title="Hobbies Inventory" menuIcon="/svg/hobbies/inventory-icon.svg"
            >
                <div className="grid grid-cols-3 gap-4 overflow-y-scroll my-4 grid-rows-2">
                    {hobbies.map((hobby, index) => {
                        return (
                            <div className="flex justify-center p-[5%]">
                                <img
                                alt={hobby.name}
                                key={index}
                                src={hobby.icon}
                                className="cursor-pointer"
                                onClick={()=>{loadItem(index)}}
                                ></img>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full h-[35px] bg-white text-dark-primary flex justify-between items-center px-4">
                    <p><span className="underline">Occupied Slots:</span> {itemNumber} / Undefined number</p>
                </div>
            </Menu>
            {openedItem}
        </div>
    )
}

export default Hobbies