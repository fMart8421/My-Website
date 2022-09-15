import React, { useState, useEffect, Fragment } from 'react';
import DashedPath from '../../components/DashedPath';
import PathStop from '../../components/PathStop';
import StopDetails from '../../components/StopDetails';

import { paths } from './paths'


const Path = () => {
  const [openLocation, setOpenLocation] = useState(<></>)


  const onClickStopHandler = (_path)=>{
    setOpenLocation(
    <StopDetails 
    logo={_path.logo}
    title={_path.title}
    mission={_path.mission}
    details={_path.details}
    location={_path.location}
    close={onClickCloseHandler}
    />
    )
  }

  const onClickCloseHandler = ()=>{
    setOpenLocation(<></>)
  }

  return (
    <section className="container mt-16 grid grid-cols-11 justify-items-center place-items-center gap-y-2">
      {openLocation}
      <div className="max-w-min">
        <div className="bg-white aspect-square h-12 rounded-full"></div>
        <p className="text-center mt-2 text-lg">Start</p>
      </div>
      {paths.map((_path) => {
        return (
          <Fragment key={_path.id}>
            <DashedPath
              className={_path.pathDetails.svgClassName}
              width="95%"
              viewWidth={_path.pathDetails.viewWidth}
              viewHeight={_path.pathDetails.viewHeight}
            >
              {_path.pathDetails.path}
            </DashedPath>
            <PathStop
            onClick={onClickStopHandler} 
            path={_path}
            title={_path.title}
            ></PathStop>
          </Fragment>
        )
      })}



    </section>
  )
}

export default Path

/*

<svg
        className={`col-span-4 ${styles["continuous-offset"]}`}
        width="95%"
        viewBox="0 0 486 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 7.71832C155.861 -15.8212 371.402 41.8382 484 27.7521" stroke="white" stroke-width="4" stroke-linecap="round" />
      </svg>

      <PathStop
        className=""
        title={"Volunteer Firefighter"}
      />

      <svg
        className={`col-span-4 ${styles["continuous-offset"]}`}
        width="95%" viewBox="0 0 494 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5.46667C166.452 -8.54772 370 25.3385 492 25.3386" stroke="white" stroke-width="4" strokeLinecap="round" strokeDasharray="32 32" />
      </svg>


      <PathStop
        className=""
        title={"External Collaborator"}
      />
      <svg
        className={`col-span-11 pb-4 px-8 ${styles["continuous-offset-reverse"]}`}
        width="95%" viewBox="0 0 1302 182" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 180C2.5 144.5 206 -14.5 651.5 64.5C974 147.5 1322 48.5 1298 2" stroke="white" stroke-width="4" strokeLinecap="round" strokeDasharray="25 32" />
      </svg>
      <PathStop
        className=""
        title={"Member of the Academic Section"}
      />
      <svg
        className={`col-span-4 ${styles["continuous-offset"]}`}
        width="95%" viewBox="0 0 406 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 15C108.5 58.5 281.1 -6.22205 404 2.88639" stroke="white" stroke-width="4" strokeLinecap="round" strokeDasharray="25 32" />
      </svg>

      <PathStop
        className=""
        title={"Unknown"}
      />
*/ 