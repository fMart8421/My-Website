import React, { useState, useEffect } from 'react'
import store, { setHeight } from '../../redux/store/store';
import RoundedTopic from '../../components/RoundedTopic'

const Home = () => {
  const [headerHeight, setHeaderHeight] = useState(store.getState().headerHeight);
  const [height, setHeight] = useState(window.innerHeight - headerHeight);
  const [radius, setRadius] = useState(height / 3); //radius of the circumference
  const [circumferenceClassName, setCircumferenceClassName] = useState("")
  const [center, setCenter] = useState([window.innerWidth / 2, height / 2 + store.getState().headerHeight]); // [x, y] 
  const [position, setPosition] = useState([0, 0]);
  const [xAxis, setXAxis] = useState([0, 0]);
  const [roundedTopics, setRoundedTopics] = useState([]);
  const topics = ["Skills", "Contacts", "Hobbies", "Path", "GitHub"];


  useEffect(() => {
    setRadius(Math.round(height / 3));
    setPosition([Math.round(center[0] - radius), Math.round(center[1])]);
    setXAxis([Math.round(center[0] - radius), Math.round(center[0] + radius)]);
    setCircumferenceClassName(`absolute flex justify-center items-center rounded-full aspect-square border-2 border-white left-1/2 -translate-x-1/2 -translate-y-1/2`);
    createTopics();
    makeRotation();
  }, [])

  const makeRotation = async () => {
    while (true) {
      for (let x = 0; x < 400; x++) {
        createTopics(x/100);
        await timer(100);
      }
    }
  }

  const getPositions = (offset=0) => {
    const perimeter = 2*Math.PI*radius;
    const step = perimeter / topics.length;
    const _positions = [];
    for(let i=0; i<5; i++){
        _positions.push([-Math.cos((offset+4)*Math.PI/2 + 2*i*Math.PI/5)*radius+center[0], Math.sin((offset+4)*Math.PI/2 + 2*i*Math.PI/5)*radius+center[1]]);
    }
    return _positions;
  }

  const circumferenceFunction = (_direction, _radius, _center, _x) => {
    switch (_direction) {
      case "positive":
        return Math.sqrt(Math.pow(_radius, 2) - Math.pow(_x - _center[0], 2)) + _center[1];
        
      case "negative":
        return -Math.sqrt(Math.pow(_radius, 2) - Math.pow(_x - _center[0], 2)) + _center[1];
      default:
        return null;
    }
  }

  const createTopics = (offset=0) => {
    const _roundedTopics = [];
    const positions = getPositions(offset);
    for (let i = 0; i<positions.length; i++) {
      _roundedTopics.push(<RoundedTopic className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition ease-linear`} title={topics[i]} style={{ left: `${positions[i][0]}px`, top: `${positions[i][1]}px` }}></RoundedTopic>)
    }
    setRoundedTopics(_roundedTopics);
  }

  const timer = ms => new Promise(res => setTimeout(res, ms))

  return (
    <div className="">
      <div className={circumferenceClassName} style={{ height: `${2 * radius}px`, top: `${center[1]}px` }}>
        <p className="text-lg">So, what do you want to know?</p>

      </div>
      {roundedTopics}
    </div>
  )
}

export default Home