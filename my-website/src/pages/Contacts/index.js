import React from 'react'

import Contact from '../../components/Contact'

import email from "../../utilities/svg/email.svg"
import linkedin from "../../utilities/svg/linkedin.svg"
import instagram from "../../utilities/svg/instagram.svg"
import { openWindow } from '../../utilities/functions/utilityFunctions'

const Contacts = () => {

  return (
    <div className="container mb-6 grid grid-cols-2">
      <div className="flex items-center w-3/4">
        <p className="text-6xl text-justify">You want to contact me? Here's how!</p>
      </div>
      <div className="flex flex-col gap-16 mt-16">
        <Contact onClick={()=>{openWindow("email")}} alt="Email" image={email} hoverContent="fabio.martins.work@gmail.com">
        <p className="text-3xl ml-8">Send me an <span className="text-purple-500">email</span> ...</p>
        </Contact>
        <Contact onClick={()=>{openWindow("linkedin")}} alt="LinkedIn" image={linkedin} hoverContent="Fábio Martins">
        <p className="text-3xl ml-8"><span className="text-purple-500">Connect</span> with me ...</p>
        </Contact>
        <Contact onClick={()=>{openWindow("instagram")}} alt="Instagram" image={instagram} hoverContent="fabio_mart0">
        <p className="text-3xl ml-8">Or <span className="text-purple-500">stalk</span> me if you wish</p>
        </Contact>
      </div>

    </div>
  )
}

export default Contacts