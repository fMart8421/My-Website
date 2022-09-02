import React from 'react'

import { openWindow } from '../../../utilities/functions/utilityFunctions';

const SpecialTitle = (props) => {
  const className = "hover:underline hover:underline-offset-2 transition ease-out duration-1000 cursor-pointer " + props.className

  return (
    <div
      className={className}
      style={{ top: props.top, width: props.width }}
      onClick={() => { openWindow("github") }}
    >
      <p className="text-3xl font-semibold pt-2 pb-1">{props.title}</p>
      <p className="text-xl font-medium pt-1 pb-2">{props.subtitle}</p>
    </div>
  )
}

export default SpecialTitle