import React from 'react'

import styles from './index.module.css'

const PathStop = (props) => {
  const className=`flex lg:flex-col even:flex-row-reverse even:-translate-x-1/2 odd:translate-x-1/2 bg-dark-primary  max-w-min items-center max-h-min ${styles.group} cursor-pointer `+props.className
  const onClickHandler = () => {
    props.onClick(props.path)
  }
  return (
    <div 
    onClick={onClickHandler}
    style={props.style}
    className={className}
    >
      <div
        className={`h-[1.5625rem] md:h-[3.125rem] max-w-min flex justify-end relative `}
      >
        <div className={`h-0 w-0 absolute top-0 left-1/2 z-10 -translate-x-1/2 origin-bottom ${styles["bouncing-stop"]} ${styles["stop-post"]}`}>
        </div>
        <div className={`aspect-square h-5 md:h-[1.875rem] lg:h-10 bg-white rounded-full flex items-center absolute left-1/2 bottom-0 ${styles["stop-base"]}`}>
          <div className={`${styles["stop-post-shadow"]} ${styles["bouncing-stop-shadow"]}`}>
          </div>
        </div>
      </div>
      <p className="mt-4 mx-4 md:mx-12 lg:mx-0 text-center text-xs md:text-base">{props.title}</p>
    </div>
  )
}

export default PathStop