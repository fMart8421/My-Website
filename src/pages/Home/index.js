import React, { useState, useEffect, useRef } from 'react'
import RoundedTopic from '../../components/RoundedTopic'

import { topics } from './topics'
import './index.css'
import { getPosition, sleep } from '../../utilities/functions/utilityFunctions'

const topicsNumber = topics.length
const Home = () => {
  const [roundedTopics, setRoundedTopics] = useState([]);
  const [isEntering, setIsEntering] = useState(true);
  const circumferenceRef = useRef(null);
  const centerTextRef = useRef(null);

  /*
    Effect to take care of the creation of rounded topics.
    For each topic in the topics dictionary, a RoundedTopic component should be rendered.
    The position of each is calculated based on the radius of the outer circumference (visible), the index (which works as a sort of offset)
    and the number of topics, so that we can divide the circumference equally.
   */
  useEffect(() => {
    const radius = circumferenceRef.current.clientHeight / 2;
    const _topics = topics.map((topic, index) => {
      const position = getPosition(index, radius, topicsNumber);
      return (
        <RoundedTopic
          key={topic.id}
          title={topic.name}
          path={topic.path}
          className="absolute rounded-full rotation-reverse -translate-x-1/2 -translate-y-1/2 origin-top-left cursor-pointer"
          circumferenceCenter={[radius, radius]}
          position={position}
        />
      )
    });

    setRoundedTopics(_topics);
  }, [circumferenceRef.current])

  /*
    Effect to take care of all the animation classes and states
   */
  useEffect(() => {
    const addDelayedClassname = async () => {
      await sleep(1000);
      centerTextRef.current.classList.add("opacity-100");
      circumferenceRef.current.classList.remove("border-transparent")
      circumferenceRef.current.classList.add("rotation", "border-white")
      setIsEntering(false);
    }
    addDelayedClassname();

  }, [])

  /*
  When the center circumference is hovered, the rotation should pause
  */
  const stopRotationHandler = () => {
    circumferenceRef.current.style.animationPlayState = "paused";
    for (const child of circumferenceRef.current.children) {
      child.style.animationPlayState = "paused";

    }
  }
  /*
  The opposite of the previous function
  */
  const startRotationHandler = () => {
    circumferenceRef.current.style.animationPlayState = "running";
    for (const child of circumferenceRef.current.children) {
      child.style.animationPlayState = "running";
    }
  }

  return (
    <div className="relative flex-grow flex-shrink basis-0 flex justify-center items-center">
      {isEntering && <div
        className="absolute left-0 top-0 w-full h-full z-30"
      >
      </div>}
      <div
        onMouseEnter={stopRotationHandler}
        onMouseLeave={startRotationHandler}
        ref={circumferenceRef}
        className="relative h-2/3 aspect-square border-transparent border-4 rounded-full flex items-center justify-center origin-center transition-colors duration-500">
        <p
          ref={centerTextRef}
          className="text-lg rotation-reverse opacity-0 transition-opacity duration-700"
          style={{ animationDelay: "1s" }}
        >
          So, what do you wish to know?
        </p>
        {roundedTopics}
      </div>
    </div>
  )
}

export default Home