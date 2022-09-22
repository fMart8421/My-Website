import React from 'react'

import styles from './index.module.css'

const PathStop = (props) => {
  const className=`flex flex-col max-w-min items-center max-h-min ${styles.group} cursor-pointer `+props.className
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
        className={`h-[1.5175rem] md:h-[3.125rem] max-w-min flex justify-end relative`}
      >
        <div className={`h-0 w-0 absolute top-0 left-1/2 -translate-x-1/2 origin-bottom ${styles["bouncing-stop"]} ${styles["stop-post"]}`}>
        </div>
        <div className={`aspect-square h-5 md:h-10 bg-white rounded-full flex items-center absolute left-1/2 bottom-0 ${styles["stop-base"]}`}>
          <div className={`${styles["stop-post-shadow"]} ${styles["bouncing-stop-shadow"]}`}>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm md:text-base">{props.title}</p>
    </div>
  )
}

export default PathStop