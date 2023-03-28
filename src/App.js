import './App.css';
import { Routes, Route } from 'react-router-dom';
import Fooldal from './pages/Fooldal';
import Tapasztalat from './pages/Tapasztalat';
import Idopont from './pages/Idopont';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Fooldal />}></Route>
        <Route exact path="/tapasztalat" element={<Tapasztalat />}></Route>
        <Route exact path="/idopont" element={<Idopont />}></Route>
      </Routes>
    </div>
  );
}

export default App;
