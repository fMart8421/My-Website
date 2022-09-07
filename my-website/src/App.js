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

function App() {

  const [hideHeader, setHideHeader] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setHideHeader(location.pathname==="/");
  }, [location]);

  return (
    <Provider store={store}>
      {!hideHeader && <Header title={location.pathname}></Header>}
      <Routes className="App">
        <Route exact path="/" element={<Welcome></Welcome>} />
        <Route exact path="/home" element={<Home></Home>} />
        <Route exact path="/github" element={<GitHub></GitHub>} />
        <Route exact path="/contacts" element={<Contacts></Contacts>} />
        <Route exact path="/skills" element={<Skills></Skills>} />
        <Route exact path="/hobbies" element={<Hobbies></Hobbies>} />
        <Route exact path="/about" element={<About></About>} />
      </Routes>

    </Provider>
  );
}

export default App;
