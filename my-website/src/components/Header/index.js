import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import store, { setHeight, setWidth } from '../../redux/store/store';


import Name from '../Name';
import PageTitle from '../PageTitle';

const Header = (props) => {

  const titles = {
    "/github": "GitHub",
    "/contacts": "Contacts",
    "/skills": "Skills",
    "/path": "Path",
    "/hobbies": "Hobbies"
  }

  const linkRef = useRef(null);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    store.dispatch(setHeight(linkRef.current.offsetHeight));
    store.dispatch(setWidth(headerRef.current.offsetWidth));
  }, [])

  return (
    <div className="self-center w-3/5 flex flex-col">
      <header
        ref={headerRef}
        className="bg-dark-primary shadow-md shadow-white/10 flex flex-col items-center pb-4"

      >
        <Link ref={linkRef} to="/">
          <Name multiline={false} className=" text-[4.5rem]" />
        </Link>
      </header>
        {props.title !== "/home" && <PageTitle className="self-center" title={titles[props.title]}></PageTitle>}

    </div>
  )
}

export default Header