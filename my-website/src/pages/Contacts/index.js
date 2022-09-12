import React, { useState, useEffect } from 'react'

import Contact from '../../components/Contact'

import { openWindow, sleep } from '../../utilities/functions/utilityFunctions'

const Contacts = () => {

  const [sentence, setSentence] = useState("");
  const contactSentence = "You want to contact me? Here's how!"
  const sentenceCharacters = [...contactSentence];
  const charNumber = sentenceCharacters.length;
  const baseDelay = 75;

  useEffect(() => {
    const createSentence = async () => {
      let _sentence = "";
      for (const character of sentenceCharacters) {
        _sentence = _sentence + character;
        setSentence(_sentence);
        await sleep(baseDelay);
      }
    }
    createSentence();
  }, [])

  const getDelay = (_index) => {
    let _delay = charNumber * baseDelay + _index * 500
    return { animationDelay: `${_delay}ms` }
  }


  return (
    <div className="container mb-6 grid grid-cols-2">
      <div className="flex items-center w-3/4">
        <p className="text-6xl text-justify">{sentence}<span className="ml-2 typewriter"></span></p>
      </div>
      <div className="flex flex-col gap-16 mt-16">
        <Contact
          style={getDelay(0)}
          onClick={() => { openWindow("email") }}
          alt="Email"
          image={"/svg/contacts/email.svg"}
          hoverContent="fabio.martins.work@gmail.com"
        >
          <p className="text-3xl ml-8">Send me an <span className="text-purple-500">email</span> ...</p>
        </Contact>
        <Contact
          style={getDelay(1)}
          onClick={() => { openWindow("linkedin") }}
          alt="LinkedIn"
          image={"/svg/contacts/linkedin.svg"}
          hoverContent="Fábio Martins"
        >
          <p className="text-3xl ml-8"><span className="text-purple-500">Connect</span> with me ...</p>
        </Contact>
        <Contact
          style={getDelay(2)}
          onClick={() => { openWindow("instagram") }}
          alt="Instagram"
          image={"/svg/contacts/instagram.svg"}
          hoverContent="fabio_mart0">
          <p className="text-3xl ml-8">Or <span className="text-purple-500">stalk</span> me if you wish</p>
        </Contact>
      </div>

    </div>
  )
}

export default Contacts