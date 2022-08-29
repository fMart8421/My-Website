import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <Routes className="App">
        <Route exact path="/" element={<Welcome></Welcome>} />
        <Route exact path="/home" element={<Home></Home>} />
      </Routes>

    </Provider>
  );
}

export default App;
