import React from 'react'

import { openWindow } from '../../../utilities/functions/utilityFunctions';

const SpecialTitle = (props) => {
  const className = "hover:underline hover:underline-offset-2 transition ease-out duration-1000 cursor-pointer " + props.className

  return (
    <div
      className={className}
      onClick={() => { openWindow("github") }}
    >
      <p className="md:text-3xl text-xl font-semibold pt-1 pb-0.5 md:pt-2 md:pb-1 ">{props.title}</p>
      <p className="md:text-xl font-medium pt-0.5 pb-1 md:pt-1 md:pb-2">{props.subtitle}</p>
    </div>
  )
}

export default SpecialTitle