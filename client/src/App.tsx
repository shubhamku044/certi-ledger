import Registeration from './components/Registeration';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registeration />} />
      </Routes>
    </div>
  );
}

export default App;
