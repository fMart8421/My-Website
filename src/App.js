import React, {useEffect, useState} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import Header from './components/Header';

import Welcome from './pages/Welcome';
import Home from './pages/Home';
import GitHub from './pages/GitHub';
import Contacts from './pages/Contacts';
import Skills from './pages/Skills';
import About from './pages/About';
import Hobbies from './pages/Hobbies';
import Loading from './components/Loading';
import { sleep } from './utilities/functions/utilityFunctions';

function App() {

  const [hideHeader, setHideHeader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const loadingSetter = async () => {
      setIsLoading(location.pathname==="/skills" || location.pathname==="/hobbies" || location.pathname==="/github");
      await sleep(1500)
      setIsLoading(false);
    }
    setHideHeader(location.pathname==="/");
    loadingSetter();
    
  }, [location]);

  return (
    <Provider store={store}>
      {!hideHeader && <Header title={location.pathname}></Header>}
      <Routes className="">
        <Route exact path="/" element={<Welcome></Welcome>} />
        <Route exact path="/home" element={<Home></Home>} />
        <Route exact path="/github" element={isLoading? <Loading></Loading>:<GitHub></GitHub>} />
        <Route exact path="/contacts" element={isLoading? <Loading></Loading>:<Contacts></Contacts>} />
        <Route exact path="/skills" element={isLoading? <Loading></Loading>:<Skills></Skills>} />
        <Route exact path="/hobbies" element={isLoading? <Loading></Loading>:<Hobbies></Hobbies>} />
        <Route exact path="/about" element={isLoading? <Loading></Loading>:<About></About>} />
      </Routes>

    </Provider>
  );
}

export default App;
