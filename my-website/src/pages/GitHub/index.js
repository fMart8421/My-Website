import React, { useState, useEffect } from 'react';

import axios from 'axios';

import GithubProject from '../../components/GithubProject';
import { getProjects } from './getProjects';


const GitHub = () => {

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

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let _projects = [];
      for (const owner of owners) {
        const url = `https://api.github.com/${owner.type}/${owner.name}/repos`;
        const config = {};
        const data = await axios.get(url, config)
        for (const projectData of data.data) {
          _projects.push(getProjects(projectData));
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
    <div className="justify-self-center pb-4">

      <div className="container grid grid-cols-3 gap-16 mt-16">
        {projects.map((project, index) => {
          console.log(project)
          return (
            <GithubProject languages={project.languages} title={project.name} description={project.description} redirectTo={()=>{openWindow(project.path)}}></GithubProject>
          )
        })}

      </div>
    </div>
  )
}

export default GitHub