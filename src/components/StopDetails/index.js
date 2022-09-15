import React from 'react'

const StopDetails = (props) => {
    return (
        <>
            <div className="fixed top-0 left-0 h-full w-full bg-black/90 z-20"></div>
            <div className="overflow-y-scroll fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-2/5 z-20">
                <div className="relative w-full h-full bg-dark-primary border-2 border-white overflow-y-scroll py-4">
                    <div className="border-b-[1px] border-white flex flex-col items-center relative py-4">
                        <img alt={props.title} src={props.logo} className="h-60"></img>
                        <p className="text-4xl pt-4">{props.title}</p>
                    </div>
                    <img
                        alt="Close Icon"
                        onClick={props.close}
                        src={"/svg/close-icon.svg"}
                        className="h-[30px] absolute right-6 top-6 cursor-pointer"></img>
                    <div className="grid grid-cols-6 px-8 gap-8 pt-8 item">
                        <p className="text-2xl col-span-2 underline underline-offset-2">Location:</p>
                        <p className="text-lg col-span-4 text-justify">{props.location}</p>
                        <p className="text-2xl col-span-2 underline underline-offset-2">Mission:</p>
                        <p className="text-lg col-span-4 text-justify">{props.mission}</p>
                        <p className="text-2xl col-span-2 underline underline-offset-2">Details:</p>
                        <p className="text-lg col-span-4">{props.details}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StopDetails