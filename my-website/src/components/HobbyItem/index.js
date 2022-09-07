import React from 'react'

const HobbyItem = (props) => {

    const rarityColors = {
        "Common": "#FFF",
        "Uncommon": "#2FB500",
        "Rare": "#3090EA",
        "Legendary": "#FFC633",
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center">
            <div className="h-2/3 w-2/5 bg-dark-primary rounded-md flex flex-col">
                <div className="relative border-b-2 border-white/30">
                    <p className="text-center text-4xl py-2">{props.hobby.name}</p>
                    <img
                        alt="Close Icon"
                        className="absolute right-6 top-1/2 -translate-y-1/2 h-8 cursor-pointer"
                        src="/svg/close-icon.svg"
                        onClick={props.close}
                    ></img>
                </div>
                <div className="container relative overflow-y-scroll">
                    <div className="flex mt-8">
                        <img className="border-2 border-white p-4 rounded w-[35%]" alt="" src={props.hobby.whiteIcon}></img>
                        <div className="flex flex-col justify-between ml-8">
                            <p className="text-lg" style={{ color: `${rarityColors[props.hobby.rarity]}` }}><span className="text-white underline text-2xl font-medium mr-2">Rarity:</span> {props.hobby.rarity}</p>
                            <p className="text-lg"><span className="text-white underline text-2xl font-medium mr-2">Item Type:</span> {props.hobby.itemType}</p>
                            <p className="text-lg"><span className="text-white underline text-2xl font-medium mr-2">Power:</span> {props.hobby.power}</p>
                        </div>
                    </div>
                    <div className="my-8">
                        <p className="underline text-2xl font-medium">Description:</p>
                        <p className="text-justify text-lg mt-4">{props.hobby.description}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HobbyItem