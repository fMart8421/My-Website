import React, { useLayoutEffect, useRef } from 'react';
import store, {setHeight, setWidth} from '../../redux/store/store';


import Name from '../Name';

const Header = (props) => {

  const ref = useRef(null);

  useLayoutEffect(() =>{
    store.dispatch(setHeight(ref.current.offsetHeight));
    store.dispatch(setWidth(ref.current.offsetWidth));
  }, [])

  return (
    <header ref={ref} className="bg-black absolute left-1/2 -translate-x-1/2 w-3/5 flex justify-center pb-4">
        <Name multiline={false} className=" text-[4.5rem]" />
    </header>
  )
}

export default Header