import React, { useState, useEffect } from 'react';

import axios from 'axios';

import GithubProject from '../../components/GithubProject';
import { getProjects } from '../../utilities/functions/utilityFunctions'; 


const GitHub = () => {

  

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const owners = [
      {
        type: 'orgs',
        name: 'Camellia-Cultivar'
      },
      {
        type: 'users',
        name: 'fmart8421',
      },
      {
        type: 'orgs',
        name: 'GroNowICM'
      }
    ];
    const fetchData = async () => {
      let _projects = [];
      for (const owner of owners) {
        const url = `https://api.github.com/${owner.type}/${owner.name}/repos`;
        const config = {};
        const data = await axios.get(url, config)
        for (let i = 0; i < data.data.length; i++) {
          _projects.push(getProjects(data.data[i], i));
        }
       
      }
      setProjects(_projects);
    }
    
    fetchData();

  }, []);

  const openWindow = (_url) => {
    window.open(_url);
  }

  

  return (
      <div className="flex-grow flex-shrink basis-0 px-[10%] grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-16 mt-16 mb-6">
        {projects.map((project, index) => {
          return (
            <GithubProject 
            key={project.id} 
            style={{animationDelay:`.${index}s`}}
            languages={project.languages} 
            title={project.name} 
            description={project.description} 
            redirectTo={()=>{openWindow(project.path)}}
            ></GithubProject>
          )
        })}
      </div>
  )
}

export default GitHub