import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

function App() {
  return (
    <Routes className="App">
      <Route exact path="/" element={<Welcome></Welcome>} />
      <Route exact path="/home" element={<Home></Home>} />
    </Routes>
  );
}

export default App;
