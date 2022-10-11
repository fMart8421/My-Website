import React, {  useRef, useEffect, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import Hamburguer from '../Hamburguer';


import Name from '../Name';
import PageTitle from '../PageTitle';
import PauseMenu from '../PauseMenu';

const Header = (props) => {

  const titles = {
    "/github": "GitHub",
    "/contacts": "Contacts",
    "/skills": "Skills",
    "/path": "Path",
    "/hobbies": "Hobbies",
    "/about":"About Me"
  }

  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);
  const [isHome, setIsHome] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);


  useEffect(() => {
    setIsHome(location.pathname==="/home");
  }, [location]);


  const navigateTo=(_location)=>{
    setOpenMenu(false);
    navigate(_location);
  }

  return (
    <div className="self-center w-full lg:w-3/5 flex flex-col">
      <header
        ref={headerRef}
        className="relative bg-dark-primary shadow-md shadow-white/10 flex justify-center items-center fade-in px-2 sm:px-[10%]"

      >
        {!isHome && <Hamburguer className="absolute top-1/2 left-4 sm:left-8 md:left-[5%] -translate-y-1/2" onClick={()=>setOpenMenu(true)}></Hamburguer>}
          <Name isDisabled={isHome} className="py-2 text-[2.5rem] md:text-[4.5rem] sm:grid sm:grid-cols-2 justify-center items-center" />
      </header>
        {props.title !== "/home" && <PageTitle className="self-center" title={titles[props.title]}></PageTitle>}
        {openMenu && <PauseMenu currentPage={props.title} pages={titles} dismiss={()=>setOpenMenu(false)} navigate={navigateTo}></PauseMenu>}

    </div>
  )
}

export default Header