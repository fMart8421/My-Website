import React, { useState, useEffect } from 'react';
import store from '../../redux/store/store';
import RegularTitle from './RegularTitle';
import SpecialTitle from './SpecialTitle';


const PageTitle = (props) => {
    const [subtitle, setSubtitle] = useState("");

    const [className, setClassName] = useState(props.className + " bg-white rounded-b-[100%] text-dark-primary flex flex-col items-center");
    const [returningComponent, setReturningComponent] = useState(<></>)
    const headerHeight = store.getState().headerHeight;
    const titleWidth = store.getState().headerWidth / 2.5;

    useEffect(() => {
        props.title === "GitHub" ?
            setReturningComponent(<SpecialTitle className={className} top={headerHeight} width={titleWidth} link="https://github.com/fMart8421" subtitle="My Projects" title={props.title}></SpecialTitle>)
            :
            setReturningComponent(<RegularTitle className={className} top={headerHeight} width={titleWidth} title={props.title} ></RegularTitle>)
        
    }, [props.title])

    return returningComponent;
}

export default PageTitle