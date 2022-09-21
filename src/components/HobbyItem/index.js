import React, {useRef} from 'react'
import { sleep } from '../../utilities/functions/utilityFunctions';

const HobbyItem = (props) => {

    const rarityColors = {
        "Common": "#FFF",
        "Uncommon": "#2FB500",
        "Rare": "#3090EA",
        "Legendary": "#FFC633",
    }

    const itemRef = useRef(null);

    const closeItem = async () => {
        itemRef.current.classList.add("fade-out");
        await sleep(1000);
        props.close()
    }

    return (
        <div ref={itemRef} className="fixed top-0 left-0 w-full h-full flex items-center justify-center fade-in">
            <div 
            onClick={closeItem}
            className="fixed top-0 left-0 w-full h-full bg-black/90"></div>
            <div 
            className="w-4/5 h-1/2 lg:w-3/5 lg:h-3/5  xl:h-2/3 xl:w-2/5 bg-dark-primary rounded-md flex flex-col fade-in"
            style={{animationDelay: `200ms`}}
            >
                <div className="relative border-b-2 border-white/30">
                    <p className="text-center text-2xl lg:text-4xl py-2">{props.hobby.name}</p>
                    <img
                        alt="Close Icon"
                        className="absolute right-6 top-1/2 -translate-y-1/2 h-4 lg:h-8 cursor-pointer"
                        src="/svg/close-icon.svg"
                        onClick={closeItem}
                    ></img>
                </div>
                <div className="container relative overflow-y-scroll">
                    <div className="flex flex-col md:flex-row mt-8">
                        <img className="border-2 border-white p-4 self-center rounded h-[100px] md:w-[35%]" alt="" src={props.hobby.whiteIcon}></img>
                        <div className="flex flex-col justify-between md:ml-8 md:mt-0 mt-8">
                            <p className="md:text-xl my-1 md:my-0" style={{ color: `${rarityColors[props.hobby.rarity]}` }}><span className="text-white underline text-xl md:text-2xl font-medium mr-2">Rarity:</span> {props.hobby.rarity}</p>
                            <p className="md:text-xl my-1 md:my-0"><span className="text-white underline text-xl md:text-2xl font-medium mr-1 lg:mr-2">Item Type:</span> {props.hobby.itemType}</p>
                            <p className="md:text-xl my-1 md:my-0"><span className="text-white underline text-xl md:text-2xl font-medium mr-1 lg:mr-2">Power:</span> {props.hobby.power}</p>
                        </div>
                    </div>
                    <div className="my-8">
                        <p className="underline text-xl md:text-2xl font-medium">Description:</p>
                        <p className="text-justify md:text-lg mt-4">{props.hobby.description}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HobbyItem