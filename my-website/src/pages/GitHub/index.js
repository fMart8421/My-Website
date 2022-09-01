import React from 'react'
import GithubProject from '../../components/GithubProject';


const GitHub = () => {

    
  return (
    <div className="justify-self-center pb-4">

        <div className="container grid grid-cols-3 gap-16 mt-16">
            <GithubProject languages={["Language 1", "Language 2"]} title={"Project 1"} description={"Some Description"}></GithubProject>
            <GithubProject languages={["Language 1", "Language 2"]} title={"Project 2"} description={"Some Description"}></GithubProject>
            <GithubProject languages={["Language 1", "Language 2"]} title={"Project 3"} description={"Some Description"}></GithubProject>
            <GithubProject languages={["Language 1", "Language 2"]} title={"Project 4"} description={"Some Description"}></GithubProject>
        </div>
    </div>
  )
}

export default GitHub