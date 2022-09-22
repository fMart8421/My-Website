import React, { useState, Fragment } from 'react';
import DashedPath from '../../components/DashedPath';
import PathStop from '../../components/PathStop';
import StopDetails from '../../components/StopDetails';

import { paths } from './paths'
import styles from './index.module.css'


const Path = (props) => {
  const [openLocation, setOpenLocation] = useState(<></>)


  const onClickStopHandler = (_path) => {
    setOpenLocation(
      <StopDetails
        logo={_path.logo}
        title={_path.title}
        mission={_path.mission}
        details={_path.details}
        location={_path.location}
        duration={_path.duration}
        extraContent={_path.extraContent}
        close={onClickCloseHandler}
      />
    )
  }

  const getPath = () => {
    if (!props.isNotMobile) {
      return (
        paths.map((_path) => {
          return (
            <Fragment key={_path.id}>
              <PathStop
                onClick={onClickStopHandler}
                path={_path}
                title={_path.mission}
              ></PathStop>
            </Fragment>
          )
        })
      )
    }
    return paths.map((_path) => {
      return (
        <Fragment key={_path.id}>
          <DashedPath
            className={_path.pathDetails.svgClassName}
            width="100%"
            height="100%"
            viewWidth={_path.pathDetails.viewWidth}
            viewHeight={_path.pathDetails.viewHeight}
          >
            {_path.pathDetails.path}
          </DashedPath>
          <PathStop
            onClick={onClickStopHandler}
            path={_path}
            title={_path.mission}
          ></PathStop>
        </Fragment>
      )
    })
  }

  const onClickCloseHandler = () => {
    setOpenLocation(<></>)
  }

  return (
    <section className="px-[10%] relative flex-grow flex-shrink basis-0 my-8 md:my-16 flex flex-col items-center justify-between lg:grid lg:grid-cols-11 lg:justify-items-center lg:place-items-center lg:gap-y-2 fade-in">
      {openLocation}
      <div className="max-w-min bg-dark-primary z-10">
        <div className="bg-white aspect-square h-8 md:h-12 rounded-full"></div>
        <p className="text-center mt-2 text-sm md:text-lg">Start</p>
      </div>
      {!props.isNotMobile && <svg className={`${styles["continuous-offset"]} absolute left-1/2 -translate-x-1/2`} width="3" height="100%" viewBox="0 0 2 488" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path height="100%" d="M1 0.5V487.5" stroke="white" stroke-width="3" stroke-dasharray="5 15" />
      </svg>}
      {getPath()}
    </section>
  )
}

export default Path
