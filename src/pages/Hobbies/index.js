import React, { useState } from 'react';
import HobbyItem from '../../components/HobbyItem';
import Menu from '../../components/Menu';

import { hobbies } from "./hobbies.js";

const Hobbies = () => {

    const [itemNumber,] = useState(hobbies.length);
    const [openedItem, setOpenedItem] = useState(<></>)

    const loadItem = (_item) => {
        setOpenedItem(<HobbyItem close={() => { setOpenedItem(<></>) }} hobby={hobbies[_item]}></HobbyItem>)
    }

    return (
        <div className="flex-grow flex-shrink basis-0 px-[10%] grid lg:grid-cols-6 py-8 items-center">
            <div className="col-span-2 flex items-center">
                <img alt="Talking Fabito" src="/svg/hobbies/talking-fabito.svg" ></img>
            </div>
            <div></div>
            <Menu className="mt-10 col-span-2 lg:col-span-3 flex flex-col justify-between fade-in justify-self-center lg:justify-self-end h-[400px] lg:h-[500px] 2xl:h-[600px]"
                title="Hobbies Inventory" menuIcon="/svg/hobbies/inventory-icon.svg"
            >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-scroll my-4 lg:grid-rows-2">
                    {hobbies.map((hobby, index) => {
                        return (
                            <div
                                key={index}
                                className="flex justify-center px-6 lg:p-[5%]">
                                <img
                                    alt={hobby.name}
                                    src={hobby.icon}
                                    className="cursor-pointer "
                                    onClick={() => { loadItem(index) }}
                                ></img>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full h-[35px] bg-white text-dark-primary text-xs md:text-base flex justify-between items-center px-4">
                    <p><span className="underline">Occupied Slots:</span> {itemNumber} / Undefined number</p>
                </div>
            </Menu>
            {openedItem}
        </div>
    )
}

export default Hobbies