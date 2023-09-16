import Registeration from './components/Registeration';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Registeration />} ></Route>
      </Routes>
    </>
  );
}

export default App;
