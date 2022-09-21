import React from 'react'

const RegularTitle = (props) => {
  return (
    <div
            className={props.className}
        >
            <p className="md:text-3xl text-xl font-semibold md:py-4 py-2">{props.title}</p>
        </div>
  )
}

export default RegularTitle