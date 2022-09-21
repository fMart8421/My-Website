import React, {useEffect, useState, Suspense} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header';

import Welcome from './pages/Welcome'
import Loading from './components/Loading';
import { sleep } from './utilities/functions/utilityFunctions';
import Path from './pages/Path';

const Home = React.lazy(()=> import('./pages/Home'))
const MobileHome = React.lazy(()=> import('./pages/Home/MobileHome'))
const GitHub = React.lazy(()=> import('./pages/GitHub'))
const Contacts = React.lazy(()=> import('./pages/Contacts'))
const Skills = React.lazy(()=> import('./pages/Skills'))
const Hobbies = React.lazy(()=> import('./pages/Hobbies'))
const About = React.lazy(()=> import('./pages/About'))



function App() {
  const [hideHeader, setHideHeader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  const location = useLocation();

  useEffect(()=> {
    const windowResizeHandler = () => {
      setIsMobile(window.innerWidth < 1280 )
    }
    window.addEventListener("resize", windowResizeHandler)
  },[])

  

  useEffect(() => {
    const loadingSetter = async () => {
      setIsLoading(location.pathname !=="/" && location.pathname!=="/home");
      await sleep(1500)
      setIsLoading(false);
    }
    setHideHeader(location.pathname==="/");
    loadingSetter();
    
  }, [location]);

  const getPage = (_pagePath) => {
    switch (_pagePath) {
      case "/home":
        return isMobile ? <MobileHome></MobileHome> : <Home></Home>
      case "path":
        return isMobile ? <></> : <Path></Path>
      default:
        return <></>
    }
  }

  return (
    <>
      {!hideHeader && <Header title={location.pathname}></Header>}
      <Suspense fallback={<Loading/>}>
      <Routes className="">
        <Route exact path="/" element={<Welcome></Welcome>} />
        <Route exact path="/home" element={getPage("/home")} />
        <Route exact path="/github" element={isLoading? <Loading/>:<GitHub></GitHub>} />
        <Route exact path="/contacts" element={isLoading? <Loading/>:<Contacts></Contacts>} />
        <Route exact path="/skills" element={isLoading? <Loading/>:<Skills></Skills>} />
        <Route exact path="/hobbies" element={isLoading? <Loading/>:<Hobbies></Hobbies>} />
        <Route exact path="/path" element={isLoading? <Loading/>:<Path></Path>} />
        <Route exact path="/about" element={isLoading? <Loading/>:<About></About>} />
      </Routes>
      </Suspense>

    </>
  );
}

export default App;
