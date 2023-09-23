import Registeration from './components/Registeration';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'CertiLedger | Create BlockChain based certificates';
    console.log('title added');
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registeration />} />
      </Routes>
    </div>
  );
}

export default App;
