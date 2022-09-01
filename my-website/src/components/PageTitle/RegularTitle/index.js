import React from 'react'

const RegularTitle = (props) => {
  return (
    <div
            className={props.className}
            style={{ top: props.top, width: props.width }}
        >
            <p className="text-3xl font-semibold pt-4 pb-4">{props.title}</p>
        </div>
  )
}

export default RegularTitle