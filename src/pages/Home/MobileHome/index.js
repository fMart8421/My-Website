import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { topics } from '../topics'

import styles from './index.module.css'

const MobileHome = () => {
  const [squaredTopics, setSquaredTopics] = useState(<></>)
  const navigate = useNavigate();
  useEffect(() => {
      setSquaredTopics(topics.map((topic, index)=>{

        return(
          <div
          key={topic.id}
          className={`font-medium bg-white odd:rounded-tl-full odd:rounded-br-full odd:origin-top-right even:rounded-bl-full even:rounded-tr-full even:origin-top-left text-dark-primary py-4 flex items-center justify-center hover:scale-110 transition-all ease-out duration-500 relative m-2 group fade-in`}
          style={{animationDelay:`${index*200}ms`}}
          onClick={() => { navigate(topic.path) }}>
          <p
              className="fade-in z-10 md:text-lg lg:text-xl"
          >

              {topic.name}
          </p>
      </div>
        )
      }))
  },[navigate])

  return (
    <div className="relative flex-grow flex-shrink basis-0 grid grid-rows-3 grid-cols-2 py-10 px-[10%]">
        {squaredTopics}
        <div 
        className={`absolute top-0 left-1/2 h-full w-4 bg-white -translate-x-1/2 open-scroll ${styles["slide-down"]}`}
        ></div>
    </div>
  )
}

export default MobileHome