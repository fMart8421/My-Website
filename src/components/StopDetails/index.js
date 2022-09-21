import React, {useState} from 'react'

const StopDetails = (props) => {
    const [animation, setAnimation] = useState("fade-in");
    
    const handleClose= ()=> {
        setAnimation("fade-out");
        setTimeout(()=>{
            props.close();
        }, 1000);
    }

    return (
        <>
            <div 
            onClick={handleClose}
            className={`fixed top-0 left-0 h-full w-full bg-black/90 z-20 ${animation}`}
            ></div>
            <div className={`overflow-y-scroll fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 lg:w-2/5 w-4/5 z-20 ${animation}`}>
                <div className="relative w-full h-full bg-dark-primary border-2 border-white overflow-y-scroll py-4">
                    <div className="border-b-[1px] border-white flex flex-col items-center relative py-4">
                        <img alt={props.title} src={props.logo} className="h-[7.5rem] md:h-40 max-w-[75%]"></img>
                        <p className="md:text-4xl text-2xl pt-4">{props.title}</p>
                    </div>
                    <img
                        alt="Close Icon"
                        onClick={handleClose}
                        src={"/svg/close-icon.svg"}
                        className="md:h-[30px] h-[20px] fixed right-7 top-6 cursor-pointer"></img>
                    <div className="grid grid-cols-6 px-8 gap-8 pt-8 item">
                        <p className="md:text-2xl text-lg col-span-2 underline underline-offset-2">Location:</p>
                        <p className="md:text-lg text-sm col-span-4 text-justify ml-2">{props.location}</p>
                        <p className="md:text-2xl text-lg col-span-2 underline underline-offset-2">Mission:</p>
                        <p className="md:text-lg text-sm col-span-4 text-justify ml-2">{props.mission}</p>
                        <p className="md:text-2xl text-lg col-span-2 underline underline-offset-2">Duration:</p>
                        <p className="md:text-lg text-sm col-span-4 text-justify ml-2">{props.duration}</p>
                        <p className="md:text-2xl text-lg col-span-2 underline underline-offset-2">Details:</p>
                        <p className="md:text-lg text-sm col-span-4 text-justify">{props.details}</p>
                        {props.extraContent && <><p className="text-2xl col-span-2 underline underline-offset-2">Extra:</p>
                        <a href={props.extraContent.link} className="text-lg col-span-4 ">{props.extraContent.content}</a></>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default StopDetails