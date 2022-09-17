import React, { } from 'react'


const DashedPath = (props) => {
  return (
    <svg
      className={props.className}
      width={props.width}
      viewBox={`0 0 ${props.viewWidth} ${props.viewHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </svg>

  )
}

export default DashedPath