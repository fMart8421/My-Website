import React from 'react'
import { Link } from 'react-router-dom'

const Name = (props) => {

  const className = props.className + ` reenie-beanie text-indigo-100 ${props.isDisabled ? ' cursor-default': ''}`
  return (
    <Link to={!props.isDisabled && `/home`} id="nameComponent" className={className}>
      <p>Fábio</p><p id="nameComponent_lastName" className="transition">Martins</p>
    </Link>
  )
}

export default Name