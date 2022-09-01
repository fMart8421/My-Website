import React, {useEffect, useState} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import Welcome from './pages/Welcome';
import Home from './pages/Home';
import GitHub from './pages/GitHub';

import Header from './components/Header';

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
      </Routes>

    </Provider>
  );
}

export default App;
