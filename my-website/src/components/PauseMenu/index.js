import React, { useState, useEffect } from 'react'
import ChangePageItems from '../ChangePageItems';
import PauseMenuItems from '../PauseMenuItems';
import PauseMenuTitle from '../PauseMenuTitle'

const PauseMenu = (props) => {

    const [menuTitle, setMenuTitle] = useState("Pause Menu");
    const [currentItems, setCurrentItems] = useState("pauseMenu");
    const [items, setItems] = useState(<></>)

    useEffect(() => {
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
    }, [currentItems]);

    const getPages = () =>{
        let _pages = [];
        for (const _page of Object.keys(props.pages)) {
            if(_page !== props.currentPage && _page !== "/about"){
                _pages.push({path:_page, title:props.pages[_page]})
            }
        }
        return _pages;
    }

    const closeMenu = () => {
        setMenuTitle("Pause Menu");
        props.dismiss();
    }

    return (
        <div className="absolute top-0 left-0 h-full w-full z-10"
        >
            <div className="absolute top-0 left-0 bg-black/90 h-full w-full" onClick={closeMenu}>
            </div>
            <div
                className="w-1/2 h-2/3 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center"
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