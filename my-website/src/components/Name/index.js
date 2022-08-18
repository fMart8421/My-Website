import React from 'react'

const Name = (props) => {

    const className = props.className + ' reenie-beanie text-indigo-100'
  return (
    props.multiline? <div className={className}>
        <p>Fábio</p><p className="-mt-4">Martins</p>
    </div>
    :
    <p className={className}>Fábio Martins</p>
  )
}

export default Name