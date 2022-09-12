import React, { useState, useEffect } from 'react'
import store from '../../redux/store/store';
import RoundedTopic from '../../components/RoundedTopic';

import './index.css';

const Home = () => {
  const [headerHeight, setHeaderHeight] = useState(store.getState().headerHeight);
  const [height, setHeight] = useState(window.innerHeight - headerHeight);
  const [radius, setRadius] = useState(height / 3); //radius of the circumference
  const [center, setCenter] = useState([window.innerWidth / 2, height / 2 + store.getState().headerHeight]); // [x, y] 
  const [rotationCenter, setRotationCenter] = useState([radius, radius])
  const [roundedTopics, setRoundedTopics] = useState([]);
  const [hover, setHover] = useState(false);
  const topics = ["Skills", "Contacts", "Hobbies", "Path", "GitHub"];
  const [unrenderImage, setUnrenderImage] = useState(false);


  useEffect(() => {
    getPositions();
    setRadius(Math.round(height / 3));
  }, [])

  const getPositions = () => {
    if (!hover) {
      const _positions = [];
      for (let i = 0; i < topics.length; i++) {
        _positions.push([-Math.cos((3) * Math.PI / 2 + 2 * i * Math.PI / 5) * radius + rotationCenter[0], Math.sin((3) * Math.PI / 2 + 2 * i * Math.PI / 5) * radius + rotationCenter[1]]);
      }
      return _positions;
    }
  }

  const stopRotation = () => {
    document.getElementById("center_of_rotation").style.animationPlayState = "paused";
    for (const topic of topics) {
      document.getElementById(topic).style.animationPlayState = "paused";
    }
  }

  const startRotation = () => {
    document.getElementById("center_of_rotation").style.animationPlayState = "running";
    for (const topic of topics) {
      document.getElementById(topic).style.animationPlayState = "running";
    }
  }

  useEffect(() => {
    const _roundedTopics = [];
    const positions = getPositions();
    for (let i = 0; i < topics.length; i++) {
      if (positions[i]) {
        _roundedTopics.push(
          <RoundedTopic
            id={topics[i]}
            onMouseEnter={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
            className={`absolute rounded-full ease-linear rotation-reverse -translate-x-1/2 -translate-y-1/2`}
            title={topics[i]}
            style={{ left: `${positions[i][0]}px`, top: `${positions[i][1]}px` }}>
          </RoundedTopic>
        )
      }
    }
    setRoundedTopics(_roundedTopics);
  }, []);

  return (
    <div className="">
      <div
        className={`absolute flex justify-center items-center rounded-full aspect-square border-2 border-white left-1/2 -translate-x-1/2 -translate-y-1/2`}
        style={{ height: `${2 * radius}px`, top: `${center[1]}px` }}
      >
        <p className="text-lg">So, what do you want to know?</p>

      </div>
      <div
        onMouseEnter={stopRotation}
        onMouseLeave={startRotation}
        id="center_of_rotation"
        className="rotation fixed -translate-x-1/2 -translate-y-1/2 left-1/2 flex w-min aspect-square"
        style={{ height: `${2 * radius}px`, top: `${center[1]}px` }}>
        {roundedTopics}
      </div>

    </div>
  )
}

export default Home