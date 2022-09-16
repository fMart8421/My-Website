import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {

  return (
    <div className="container mt-16">
      <div className="grid grid-cols-12 gap-x-16">
        <Link to="/cv_FábioMartins.pdf" download target="_blank" className="col-span-3 flex flex-col align-center fade-in">
          <img alt="Fabitu" src="/svg/about/fabitu.svg" className="max-h-[20rem]"></img>
          <p className="text-center">Click me to get my <span className=" text-fuchsia-300">CV</span>!</p>
        </Link>

        <div className="text-justify col-span-9">
          <p 
          style={{animationDelay:`400ms`}}
          className="text-3xl fade-in"><span className="text-fuchsia-300 text-4xl">Hello there!</span> As I've said before, my name is Fábio Martins, nickname Fabitu (my friends call me that because I'm tall).</p>
          <p 
          style={{animationDelay:`600ms`}}
          className="text-xl mt-4 fade-in">I just finished my Bachelor's Degree in Computer Science and Programming, and now I'm looking forward to the new challenges that life has to offer. I'm a 21 years old high-spirited person (except in the morning), always looking for new challenges and I'm always trying to improve myself.</p>
          <p 
          style={{animationDelay:`800ms`}}
          className="text-xl mt-4 fade-in">I hope you liked the design of this website (I made it myself :D). It was made with ReactJS, along with TailwindCSS and plain CSS. If you have any suggestions or if you found any bugs on the website, please contact me on LinkedIn or email me (you can find those on the contacts page).</p>
        </div>
      </div>

    </div>
  )
}

export default About