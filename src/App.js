import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import Votes from './components/Votes';
import Registration from './components/Registration';
import Pollinfo from './components/Pollinfo';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Votes />} />
          <Route path='/login' element={<Registration />} />
          <Route path='/:12' element={<Pollinfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
