import React, {useEffect, useState, Suspense} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header';

import Loading from './components/Loading';
import { sleep } from './utilities/functions/utilityFunctions';
import Path from './pages/Path';

const Welcome = React.lazy(()=> import('./pages/Welcome'))
const Home = React.lazy(()=> import('./pages/Home'))
const GitHub = React.lazy(()=> import('./pages/GitHub'))
const Contacts = React.lazy(()=> import('./pages/Contacts'))
const Skills = React.lazy(()=> import('./pages/Skills'))
const Hobbies = React.lazy(()=> import('./pages/Hobbies'))
const About = React.lazy(()=> import('./pages/About'))



function App() {

  const [hideHeader, setHideHeader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const loadingSetter = async () => {
      setIsLoading(location.pathname !=="/" && location.pathname!=="/home");
      await sleep(1500)
      setIsLoading(false);
    }
    setHideHeader(location.pathname==="/");
    loadingSetter();
    
  }, [location]);

  return (
    <>
      {!hideHeader && <Header title={location.pathname}></Header>}
      <Suspense fallback={<Loading/>}>
      <Routes className="">
        <Route exact path="/" element={<Welcome></Welcome>} />
        <Route exact path="/home" element={<Home></Home>} />
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
