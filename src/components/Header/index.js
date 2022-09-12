import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import store, { setHeight, setWidth } from '../../redux/store/store';
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
  const linkRef = useRef(null);
  const headerRef = useRef(null);
  const [showHamburger, setShowHamburger] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);


  useEffect(() => {
    setShowHamburger(location.pathname!=="/home");
  }, [location]);

  useLayoutEffect(() => {
    store.dispatch(setHeight(linkRef.current.offsetHeight));
    store.dispatch(setWidth(headerRef.current.offsetWidth));
  }, []);

  const navigateTo=(_location)=>{
    setOpenMenu(false);
    navigate(_location);
  }

  return (
    <div className="self-center w-3/5 flex flex-col">
      <header
        ref={headerRef}
        className="relative bg-dark-primary shadow-md shadow-white/10 flex flex-col items-center pb-4"

      >
        {showHamburger && <Hamburguer onClick={()=>setOpenMenu(true)}></Hamburguer>}
        <Link ref={linkRef} to="/">
          <Name className=" text-[4.5rem] grid grid-cols-2" />
        </Link>
      </header>
        {props.title !== "/home" && <PageTitle className="self-center" title={titles[props.title]}></PageTitle>}
        {openMenu && <PauseMenu currentPage={props.title} pages={titles} dismiss={()=>setOpenMenu(false)} navigate={navigateTo}></PauseMenu>}

    </div>
  )
}

export default Header