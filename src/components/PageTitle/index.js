import React, { useState, useEffect } from 'react';
import RegularTitle from './RegularTitle';
import SpecialTitle from './SpecialTitle';


const PageTitle = (props) => {

    const className = props.className + " bg-white rounded-b-[100%] text-dark-primary flex flex-col items-center w-3/5 md:w-2/5 ";
    const [returningComponent, setReturningComponent] = useState(<></>)


    useEffect(() => {
        props.title === "GitHub" ?
            setReturningComponent(<SpecialTitle className={className} link="https://github.com/fMart8421" subtitle="My Projects" title={props.title}></SpecialTitle>)
            :
            setReturningComponent(<RegularTitle className={className} title={props.title} ></RegularTitle>)

    }, [props.title, className])

    return returningComponent;
}

export default PageTitle