import React from 'react'

const Name = (props) => {

  const className = props.className + ' reenie-beanie text-indigo-100'
  return (
    <div id="nameComponent" className={className}>
      <p>Fábio</p><p id="nameComponent_lastName" className="transition">Martins</p>
    </div>
  )
}

export default Name