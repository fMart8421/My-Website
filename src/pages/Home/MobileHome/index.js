import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { topics } from '../topics'
import { sleep } from '../../../utilities/functions/utilityFunctions'
import styles from './index.module.css'

const MobileHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let start = 0;
  const [swipe, setSwipe] = useState(0);
  const [displayedCards, setDisplayedCards] = useState([]);
  const previousRef = useRef(null);
  const mainRef = useRef(null);
  const nextRef = useRef(null);




  const getRoundedSelectors = () => {
    return topics.map((_, index) => {
      let className = "";
      if (index === currentIndex) {
        className = "aspect-square h-2 bg-white first:mt-0 last:mb-0 my-6 rounded-full "
      } else {
        className = "aspect-square h-2 bg-white/50 first:mt-0 last:mb-0 my-6 rounded-full "
      }
      return (
        <div key={`selector-${index}`} className={className}>
        </div>
      )
    })
  }
  const onTouchHandler = (event) => {
    start = event.touches[0].pageY;
  }
  const onTouchStopHandler = (event) => {
    setSwipe(event.changedTouches[0].pageY - start);
  }

  useEffect(() => {
    window.addEventListener("touchstart", onTouchHandler)
    window.addEventListener("touchend", onTouchStopHandler)

    setDisplayedCards(
      [
        <Link
          ref={previousRef}
          className={`bg-white rounded-md text-dark-primary text-center w-3/4 py-8 ${styles["previous-item"]} ${styles["rotate-previous-in"]}`}
          key={topics[topics.length - 1].id}
          to={topics[topics.length - 1].path}>{topics[topics.length - 1].name}</Link>,
        <Link
          ref={mainRef}
          className={`bg-white rounded-md text-dark-primary text-center w-3/4 py-8 ${styles["fade-in"]}`}
          key={topics[0].id}
          to={topics[0].path}>{topics[0].name}</Link>,
        <Link
          ref={nextRef}
          className={`bg-white rounded-md text-dark-primary text-center w-3/4 py-8 ${styles["next-item"]} ${styles["rotate-next-in"]}`}
          key={topics[1].id}
          to={topics[1].path}>{topics[1].name}</Link>,
      ]
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (swipe < 0) {
        previousRef.current.classList.remove(styles["rotate-previous-in"]);
        nextRef.current.classList.remove(styles["rotate-next-in"]);
        previousRef.current.classList.add(styles["rotate-previous-out"]);
        mainRef.current.classList.add(styles["rotate-main-to-previous"]);
        nextRef.current.classList.add(styles["rotate-next-to-main"]);
        setCurrentIndex((prevState) => {
          return incremented(prevState)
        })
        getNewDisplayedCards(incremented(currentIndex) , 0);
      } else if (swipe > 0) {
        previousRef.current.classList.remove(styles["rotate-previous-in"]);
        nextRef.current.classList.remove(styles["rotate-next-in"]);
        previousRef.current.classList.add(styles["rotate-previous-to-main"]);
        mainRef.current.classList.add(styles["rotate-main-to-next"]);
        nextRef.current.classList.add(styles["rotate-next-out"]);
        getNewDisplayedCards(decremented(currentIndex), 1);
        setCurrentIndex((prevState) => {
          return decremented(prevState)
        })
      }
    }, 200)

    return (() => {
      clearTimeout(timeoutID);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swipe])

  const incremented = n => {
    return n === topics.length - 1 ? 0 : n + 1
  }

  const decremented = n =>{
   return n === 0 ? topics.length - 1 : n - 1
  }



  const getNewDisplayedCards = async (_index, direction) => {

    let currentCard = _index, previousCard = _index - 1, nextCard = _index + 1;
    if (_index === 0) {
      previousCard = topics.length - 1
    } else if (_index === topics.length - 1) {
      nextCard = 0;
    }

    await sleep(1700);
    if (direction) {
      setDisplayedCards(
        [
          <Link
            ref={previousRef}
            className={`bg-white rounded-md text-dark-primary text-center w-3/4 py-8 ${styles["previous-item"]} ${styles["rotate-previous-in"]}`}
            key={topics[previousCard].id}
            to={topics[previousCard].path}>{topics[previousCard].name}</Link>,
          <Link
            ref={mainRef}
            className={`bg-white rounded-md text-dark-primary text-center w-3/4 py-8`}
            key={topics[currentCard].id}
            to={topics[currentCard].path}>{topics[currentCard].name}</Link>,
          <Link
            ref={nextRef}
            className={`bg-white rounded-md text-dark-primary text-center w-3/4 py-8 ${styles["next-item"]}`}
            key={topics[nextCard].id}
            to={topics[nextCard].path}>{topics[nextCard].name}</Link>,
        ]
      )
    } else {
      setDisplayedCards(
        [
          <Link
            ref={previousRef}
            className={`bg-white rounded-md text-dark-primary text-center w-3/4 py-8 ${styles["previous-item"]}`}
            key={topics[previousCard].id}
            to={topics[previousCard].path}>{topics[previousCard].name}</Link>,
          <Link
            ref={mainRef}
            className={`bg-white rounded-md text-dark-primary text-center w-3/4 py-8`}
            key={topics[currentCard].id}
            to={topics[currentCard].path}>{topics[currentCard].name}</Link>,
          <Link
            ref={nextRef}
            className={`bg-white rounded-md text-dark-primary text-center w-3/4 py-8 ${styles["next-item"]} ${styles["rotate-next-in"]}`}
            key={topics[nextCard].id}
            to={topics[nextCard].path}>{topics[nextCard].name}</Link>,
        ]
      )
    }

  }
  return (
    <div className="relative flex-grow flex-shrink basis-0 flex justify-center items-center py-10 px-[10%]">

      <div
        className={`absolute top-1/2 right-4 -translate-y-1/2`}
      >
        {getRoundedSelectors()}
      </div>
      <div className={`w-full flex flex-col items-center relative`} >
        {displayedCards}
      </div>

    </div>
  )
}

export default MobileHome