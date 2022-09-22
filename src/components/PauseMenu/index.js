import React, { useState, useEffect } from 'react'
import { closeMenu } from '../../utilities/functions/utilityFunctions';
import ChangePageItems from '../ChangePageItems';
import PauseMenuItems from '../PauseMenuItems';
import PauseMenuTitle from '../PauseMenuTitle'

const PauseMenu = (props) => {

    const [menuTitle, setMenuTitle] = useState("Pause Menu");
    const [currentItems, setCurrentItems] = useState("pauseMenu");
    const [items, setItems] = useState(<></>)



    useEffect(() => {
        const getPages = () =>{
            let _pages = [];
            for (const _page of Object.keys(props.pages)) {
                if(_page !== props.currentPage && _page !== "/about"){
                    _pages.push({path:_page, title:props.pages[_page]})
                }
            }
            return _pages;
        }
        switch (currentItems) {
            case "pauseMenu":
                setMenuTitle("Pause Menu");
                setItems(<PauseMenuItems dismiss={props.dismiss} navigate={props.navigate} changePage={()=>setCurrentItems("changePage")}></PauseMenuItems>);
                break;
            case "changePage":
                setMenuTitle("Change Page");
                const pages = getPages();
                setItems(<ChangePageItems pageList={pages} navigate={props.navigate} goBack={()=>setCurrentItems("pauseMenu")}></ChangePageItems>);
            break;
            default:
                break;
        }
    }, [currentItems, props.dismiss, props.navigate, props.currentPage, props.pages]);

    

    

    return (
        <div className="fixed top-0 left-0 h-full w-full z-10"
        >
            <div className="absolute top-0 left-0 bg-black/90 h-full w-full" onClick={()=>{closeMenu("menu","close-scroll",1000,props.dismiss)}}>
            </div>
            <div
                className="lg:w-1/2 lg:h-2/3 w-3/4 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center"
            >
                <div className="relative">
                    <PauseMenuTitle title={menuTitle} />
                </div>
                {items}

            </div>

        </div>
    )
}

export default PauseMenu